import { useState, useEffect } from 'react';

// Define the structure of crop data
export interface CropData {
  year: number;
  crop: string;
  production: number;
  yield: number;
  area: number;
}

// Custom hook to fetch and parse agricultural data
export const useAgriculturalData = () => {
  const [data, setData] = useState<CropData[]>([]);

  useEffect(() => {
    fetch('/agriculture_data.csv')
      .then(response => response.text())
      .then(text => {
        // Skip the header row and parse each data row
        const rows = text.split('\n').slice(1);
        const parsedData = rows.map(row => {
          const [year, crop, production, yield_, area] = row.split(',');
          return {
            year: parseInt(year),
            crop,
            production: parseFloat(production) || 0,
            yield: parseFloat(yield_) || 0,
            area: parseFloat(area) || 0,
          };
        });
        setData(parsedData);
      });
  }, []);

  return data;
};

// Calculate yearly statistics for crops with max and min production
export const getYearlyCropStats = (data: CropData[]) => {
  const yearlyStats = new Map<number, { max: string; min: string }>();

  data.forEach(entry => {
    if (!yearlyStats.has(entry.year)) {
      yearlyStats.set(entry.year, { max: entry.crop, min: entry.crop });
    } else {
      const current = yearlyStats.get(entry.year)!;
      const maxProduction = data.find(d => d.year === entry.year && d.crop === current.max)!.production;
      const minProduction = data.find(d => d.year === entry.year && d.crop === current.min)!.production;

      if (entry.production > maxProduction) {
        current.max = entry.crop;
      }
      if (entry.production < minProduction) {
        current.min = entry.crop;
      }
    }
  });

  // Convert Map to array and sort by year
  return Array.from(yearlyStats.entries())
    .sort(([a], [b]) => a - b)
    .map(([year, { max, min }]) => ({ year, maxCrop: max, minCrop: min }));
};

// Calculate average yield and area for each crop
export const getCropAverages = (data: CropData[]) => {
  const cropStats = new Map<string, { yieldSum: number; areaSum: number; count: number }>();

  // Accumulate data for each crop
  data.forEach(entry => {
    if (!cropStats.has(entry.crop)) {
      cropStats.set(entry.crop, { yieldSum: 0, areaSum: 0, count: 0 });
    }
    const stats = cropStats.get(entry.crop)!;
    stats.yieldSum += entry.yield;
    stats.areaSum += entry.area;
    stats.count++;
  });

  // Calculate averages and format the results
  return Array.from(cropStats.entries()).map(([crop, stats]) => ({
    crop,
    avgYield: Number((stats.yieldSum / stats.count).toFixed(3)),
    avgArea: Number((stats.areaSum / stats.count).toFixed(3)),
  }));
};