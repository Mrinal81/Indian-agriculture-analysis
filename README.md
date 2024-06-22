# Indian Agriculture Data Analysis

This project analyzes Indian agricultural data from 1950 to 2020, providing insights into crop production, yield, and cultivation area trends.

## Features

- Yearly statistics showing crops with maximum and minimum production
- Average yield and cultivation area for each crop over the entire period
- Interactive tables for easy data exploration

## Technology Stack

- React
- TypeScript
- Mantine UI

## Prerequisites

- Node.js (version 14 or higher)
- Yarn package manager

## Installation

1. Clone the repository:

    git clone https://github.com/Mrinal81/Indian-agriculture-analysis.git

2. Navigate to the project directory:

    cd agriculture-analysis

3. Install Dependencies:

    npm install

## Running the Project

1. Start the development server:

    yarn start

2. Open your browser and navigate to `http://localhost:3000`

## Project Structure

- `src/components/`: React components including YearlyCropStatsTable and CropAveragesTable

- `src/utils/`: Utility functions for data processing

- `public/`: Public assets including the CSV data file

## Data Source

The agricultural data is stored in `public/agriculture_data.csv`. This file contains yearly data on crop production, yield, and cultivation area from 1950 to 2020.

## Building for Production

To create a production build:

  yarn build

The build files will be in the `build` directory.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


## Contact

If you have any questions or feedback, please contact Mrinal Anand at mrinalanand561@gmail.com.
