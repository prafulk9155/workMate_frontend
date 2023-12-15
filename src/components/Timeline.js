import React, { useState } from 'react';
import './Timeline.css'; // Import the CSS file

const JiraTimelinePage = () => {
  const [timelineData, setTimelineData] = useState([
    {
      title: 'Sprint 1',
      startDate: '2023-01-01',
      endDate: '2023-01-14',
      completionStatus: 'Completed'
    },
    {
      title: 'Sprint 2',
      startDate: '2023-01-15',
      endDate: '2023-01-28',
      completionStatus: 'In Progress'
    },
    // Add more timeline data as needed
  ]);

  return (
    <div>
      <h1 className="jira-heading">Timeline</h1>
      <div className="timeline-container">
        <div className="timeline-header">
          <div className="column">Sprint Name</div>
          <div className="column">Start Date</div>
          <div className="column">End Date</div>
          <div className="column">Current Month</div>
        </div>
        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ item }) => {
  return (
    <div className="timeline-row">
      <div className="column">{item.title}</div>
      <div className="column">{item.startDate}</div>
      <div className="column">{item.endDate}</div>
      <div className="column">
        <div className="current-month-line"></div>
      </div>
    </div>
  );
};

export default JiraTimelinePage;
