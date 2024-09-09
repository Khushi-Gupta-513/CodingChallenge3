// Function to calculate average sales
// Commit message: "Implement calculateAverageSales function"
function calculateAverageSales(salesArray) {
  if (salesArray.length === 0) return 0; // Edge case: no sales
  const totalSales = salesArray.reduce((sum, sale) => sum + sale, 0);
  return totalSales / salesArray.length;
}

// Function to determine performance rating based on average sales
// Commit message: "Create determinePerformanceRating function"
function determinePerformanceRating(averageSales) {
  if (averageSales > 10000) {
    return 'Excellent';
  } else if (averageSales >= 7000) {
    return 'Good';
  } else if (averageSales >= 4000) {
    return 'Satisfactory';
  } else {
    return 'Needs Improvement';
  }
}

// Function to find top and bottom performers
// Commit message: "Develop findTopAndBottomPerformers function"
function findTopAndBottomPerformers(salesData) {
  let topPerformer = salesData[0];
  let bottomPerformer = salesData[0];

  salesData.forEach(salesperson => {
    const currentSalesTotal = salesperson.sales.reduce((a, b) => a + b, 0);
    const topSalesTotal = topPerformer.sales.reduce((a, b) => a + b, 0);
    const bottomSalesTotal = bottomPerformer.sales.reduce((a, b) => a + b, 0);

    if (currentSalesTotal > topSalesTotal) {
      topPerformer = salesperson;
    }
    if (currentSalesTotal < bottomSalesTotal) {
      bottomPerformer = salesperson;
    }
  });

  return { topPerformer, bottomPerformer };
}

// Function to generate a full performance report
// Commit message: "Implement generatePerformanceReport function"
function generatePerformanceReport(salesData) {
  const report = salesData.map(salesperson => {
    const avgSales = calculateAverageSales(salesperson.sales);
    const rating = determinePerformanceRating(avgSales);
    return {
      name: salesperson.name,
      averageSales: avgSales.toFixed(2), // format to 2 decimal places
      performanceRating: rating
    };
  });

  const { topPerformer, bottomPerformer } = findTopAndBottomPerformers(salesData);

  // Create a formatted string for the performance report
  let reportString = "Performance Report:\n";
  
  report.forEach(salesperson => {
    reportString += `Name: ${salesperson.name}\n`;
    reportString += `Average Sales: $${salesperson.averageSales}\n`;
    reportString += `Performance Rating: ${salesperson.performanceRating}\n\n`;
  });

  reportString += `Top Performer: ${topPerformer.name}\n`;
  reportString += `Bottom Performer: ${bottomPerformer.name}\n`;

  return reportString;
}

// Sample sales data for testing
const salesData = [
  { name: 'Alice', sales: [12000, 15000, 13000] },
  { name: 'Bob', sales: [7000, 6000, 7500] },
  { name: 'Charlie', sales: [3000, 4000, 3500] },
  { name: 'Diana', sales: [9000, 8500, 9200] }
];

// Running the performance report
const performanceReport = generatePerformanceReport(salesData);

// Log the performance report to the console
console.log(performanceReport);

