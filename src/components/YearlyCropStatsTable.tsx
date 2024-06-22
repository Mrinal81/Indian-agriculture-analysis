import React from 'react';
import { Table } from '@mantine/core';
import { getYearlyCropStats, CropData } from '../utils/dataProcessing';

// Define prop types for the component
interface YearlyCropStatsTableProps {
  data: CropData[];
}

// Common styles for table cells
const cellStyle = {
  border: '1px solid #dee2e6',
  padding: '10px',
  textAlign: 'center' as const,
};

export const YearlyCropStatsTable: React.FC<YearlyCropStatsTableProps> = ({ data }) => {
  // Calculate yearly crop statistics from the provided data
  const yearlyStats = getYearlyCropStats(data);

  return (
    <Table
      withTableBorder
      withColumnBorders
      striped
      highlightOnHover
      style={{
        border: '1px solid #dee2e6',
        borderCollapse: 'collapse',
      }}
    >
      <Table.Thead>
        <Table.Tr>
          <Table.Th style={cellStyle}>Year</Table.Th>
          <Table.Th style={cellStyle}>Crop with Maximum Production</Table.Th>
          <Table.Th style={cellStyle}>Crop with Minimum Production</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {yearlyStats.map(({ year, maxCrop, minCrop }) => (
          <Table.Tr key={year}>
            <Table.Td style={cellStyle}>{year}</Table.Td>
            <Table.Td style={cellStyle}>{maxCrop}</Table.Td>
            <Table.Td style={cellStyle}>{minCrop}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};