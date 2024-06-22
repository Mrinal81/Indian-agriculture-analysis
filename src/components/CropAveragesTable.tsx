import React from 'react';
import { Table, Text } from '@mantine/core';
import { getCropAverages, CropData } from '../utils/dataProcessing';

// Define prop types for the component
interface CropAveragesTableProps {
  data: CropData[];
}

// Common styles for table cells
const cellStyle = {
  border: '1px solid #dee2e6',
  padding: '10px',
  textAlign: 'center' as const,
};

export const CropAveragesTable: React.FC<CropAveragesTableProps> = ({ data }) => {
  // Calculate crop averages from the provided data
  const cropAverages = getCropAverages(data);

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
          <Table.Th style={cellStyle}>Crop</Table.Th>
          <Table.Th style={cellStyle}>Average Yield (1950-2020)</Table.Th>
          <Table.Th style={cellStyle}>Average Cultivation Area (1950-2020)</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {cropAverages.map(({ crop, avgYield, avgArea }) => (
          <Table.Tr key={crop}>
            <Table.Td style={cellStyle}>{crop}</Table.Td>
            <Table.Td style={cellStyle}>{avgYield}</Table.Td>
            <Table.Td style={cellStyle}>{avgArea}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};