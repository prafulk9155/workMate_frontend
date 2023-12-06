import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  // Dummy data for the three charts (previous, current, and upcoming weeks)
  const previousWeekData = {
    labels: ['Done', 'In Progress', 'To Do'],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
      },
    ],
  };

  const currentWeekData = {
    labels: ['Done', 'In Progress', 'To Do'],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
      },
    ],
  };

  const upcomingWeekData = {
    labels: ['Done', 'In Progress', 'To Do'],
    datasets: [
      {
        data: [50, 20, 30],
        backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
      },
    ],
  };

  return (
    <div className="pie-charts-container">
      <div className="pie-chart" style={{ width: '30%' }}>
        <h3>Previous Week</h3>
        <Pie data={previousWeekData} />
      </div>
      <div className="pie-chart" style={{ width: '30%' }}>
        <h3>Current Week</h3>
        <Pie data={currentWeekData} />
      </div>
      <div className="pie-chart" style={{ width: '30%' }}>
        <h3>Upcoming Week</h3>
        <Pie data={upcomingWeekData} />
      </div>
    </div>
  );
};

export default PieChart;
