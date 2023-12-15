import React, { useState } from 'react';
import './Project.css'; // Import your CSS file for styling

const Project = () => {
  const [projectName, setProjectName] = useState('');
  const [nodes, setNodes] = useState([]);

  const addNode = (nodeName) => {
    setNodes([...nodes, { nodeName, tasks: [] }]);
  };

  const addTask = (nodeIndex, taskName) => {
    const updatedNodes = [...nodes];
    updatedNodes[nodeIndex].tasks.push({ taskName, subtasks: [] });
    setNodes(updatedNodes);
  };

  const addSubTask = (nodeIndex, taskIndex, subtaskName) => {
    const updatedNodes = [...nodes];
    updatedNodes[nodeIndex].tasks[taskIndex].subtasks.push({ subtaskName });
    setNodes(updatedNodes);
  };

  return (
    <div className="project-container">
      <h1
        className="project-name"
        onClick={() => {
          const enteredName = prompt('Enter Project name:');
          if (enteredName) {
            setProjectName(enteredName);
          }
        }}
      >
        {projectName || 'Project Name'}
      </h1>
      <button
        onClick={() => {
          const nodeName = prompt('Enter node name:');
          if (nodeName) {
            addNode(nodeName);
          }
        }}
      >
        Add Node
      </button>
      {nodes.map((node, nodeIndex) => (
        <div key={nodeIndex} className="node">
          <h2 className="node-label">{node.nodeName}</h2>
          <button
            onClick={() => {
              const taskName = prompt('Enter task name:');
              if (taskName) {
                addTask(nodeIndex, taskName);
              }
            }}
          >
            Add Task
          </button>
          {node.tasks.map((task, taskIndex) => (
            <div key={taskIndex} className="task">
              <h3 className="task-label">{task.taskName}</h3>
              <button
                onClick={() => {
                  const subtaskName = prompt('Enter subtask name:');
                  if (subtaskName) {
                    addSubTask(nodeIndex, taskIndex, subtaskName);
                  }
                }}
              >
                Add Subtask
              </button>
              {task.subtasks.map((subtask, subtaskIndex) => (
                <div key={subtaskIndex} className="subtask">
                  <p className="subtask-label">{subtask.subtaskName}</p>
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
