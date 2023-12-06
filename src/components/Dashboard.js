import React, {  useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';

const PieChart = () => {
  const [selectedUser, setSelectedUser] = useState(''); // State to manage the selected user

  const [userList, setUserList] = useState([]);

  const fetchUserList = async () => {
    try {
      const response = await axios.get('/api/userList');
      setUserList(response.data); // Set the retrieved user list in the state
    } catch (error) {
      console.error('Error fetching user list:', error);
    }
  };

  useEffect(() => {
    fetchUserList(); // Fetch user list when the component mounts
  }, []);
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

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
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

  const pieChartStyle = {
    width: '30%',
    display: 'inline-block',
    margin: '0 10px',
    textAlign: 'center',
  };

  const renderCounts = (data) => {
    return (
      <div>
        
        {data.labels.map((label, index) => (
          <p key={index}>
            {label}: {data.datasets[0].data[index]}
          </p>
        ))}
      </div>
    );
  };

  return (
    
    <div className="pie-charts-container" style={{ whiteSpace: 'nowrap', overflowX: 'auto' }}>
      <div className="pie-chart" style={pieChartStyle}>
        <h3>Previous Week</h3>
        <Pie data={previousWeekData} />
        {renderCounts(previousWeekData)}
      </div>
      <div className="pie-chart" style={pieChartStyle}>
        <h3>Current Week</h3>
        <Pie data={currentWeekData} />
        {renderCounts(currentWeekData)}
      </div>
      <div className="pie-chart" style={pieChartStyle}>
        <h3>Upcoming Week</h3>
        <Pie data={upcomingWeekData} />
        {renderCounts(upcomingWeekData)}
      </div>
    </div>
  );
};

export default PieChart;
