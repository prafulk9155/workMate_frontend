import React, { useState } from 'react';
import './Project.css'; // Import your CSS file for styling

const Project = () => {
  const [nodes, setNodes] = useState([]);

  const addNode = () => {
    setNodes([...nodes, { tasks: [] }]);
  };

  const addTask = (nodeIndex) => {
    const updatedNodes = [...nodes];
    updatedNodes[nodeIndex].tasks.push({ subtasks: [] });
    setNodes(updatedNodes);
  };

  const addSubTask = (nodeIndex, taskIndex) => {
    const updatedNodes = [...nodes];
    updatedNodes[nodeIndex].tasks[taskIndex].subtasks.push({});
    setNodes(updatedNodes);
  };

  // Function to handle date assignment, user assignment, etc.

  return (
    <div className="project-container">
      <h1 className="project-name">Project Name</h1>
      <button onClick={addNode}>Add Node</button>
      {nodes.map((node, nodeIndex) => (
        <div key={nodeIndex} className="node">
          <h2 className="node-label">Node {nodeIndex + 1}</h2>
          <button onClick={() => addTask(nodeIndex)}>Add Task</button>
          {node.tasks.map((task, taskIndex) => (
            <div key={taskIndex} className="task">
              <h3 className="task-label">Task {taskIndex + 1}</h3>
              <button onClick={() => addSubTask(nodeIndex, taskIndex)}>Add Subtask</button>
              {task.subtasks.map((subtask, subtaskIndex) => (
                <div key={subtaskIndex} className="subtask">
                  <p className="subtask-label">Subtask {subtaskIndex + 1}</p>
                  {/* UI for assigning users and dates */}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Project;
