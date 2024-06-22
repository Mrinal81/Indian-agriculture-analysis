import React from 'react';
import { MantineProvider, Container, createTheme, MantineColorsTuple } from '@mantine/core';
import { useAgriculturalData } from './utils/dataProcessing';
import { YearlyCropStatsTable } from './components/YearlyCropStatsTable';
import { CropAveragesTable } from './components/CropAveragesTable';
import '@mantine/core/styles.css';

const App: React.FC = () => {
  const data = useAgriculturalData();

  return (
    <MantineProvider >
      <Container>
        <h1>Indian Agriculture Data Analysis</h1>
        <div>
        <YearlyCropStatsTable data={data} />
        </div>
        <div style={{ marginTop: "40px", marginBottom: "40px" }}>
        <CropAveragesTable data={data} />
        </div>
      </Container>
    </MantineProvider>
  );
};

export default App;