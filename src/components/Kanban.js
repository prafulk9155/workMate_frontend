import React, { useState } from 'react';
import './Kanban.css';

function App() {
  const [tasks, setTasks] = useState({
    todo: [
      { id: 1, content: 'Task 1' },
      { id: 2, content: 'Task 2' },
    ],
    inProgress: [
      { id: 3, content: 'Task 3' },
    ],
    done: [
      { id: 4, content: 'Task 4' },
      { id: 5, content: 'Task 5' },
    ],
  });

  const handleDragStart = (e, id, status) => {
    e.dataTransfer.setData('id', id);
    e.dataTransfer.setData('status', status);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    const id = e.dataTransfer.getData('id');
    const sourceStatus = e.dataTransfer.getData('status');

    const draggedTask = tasks[sourceStatus].find(task => task.id.toString() === id);
    const remainingTasks = tasks[sourceStatus].filter(task => task.id.toString() !== id);

    setTasks(prevTasks => ({
      ...prevTasks,
      [sourceStatus]: remainingTasks,
      [status]: [...prevTasks[status], draggedTask],
    }));
  };

  return (
    <div className="kanban-board">
      <div className="column" onDragOver={e => handleDragOver(e)} onDrop={e => handleDrop(e, 'todo')}>
        <h2>To Do</h2>
        {tasks.todo.map(task => (
          <div
            key={task.id}
            className="task"
            draggable
            onDragStart={e => handleDragStart(e, task.id, 'todo')}
          >
            {task.content}
          </div>
        ))}
      </div>
      <div className="column" onDragOver={e => handleDragOver(e)} onDrop={e => handleDrop(e, 'inProgress')}>
        <h2>In Progress</h2>
        {tasks.inProgress.map(task => (
          <div
            key={task.id}
            className="task"
            draggable
            onDragStart={e => handleDragStart(e, task.id, 'inProgress')}
          >
            {task.content}
          </div>
        ))}
      </div>
      <div className="column" onDragOver={e => handleDragOver(e)} onDrop={e => handleDrop(e, 'done')}>
        <h2>Done</h2>
        {tasks.done.map(task => (
          <div
            key={task.id}
            className="task"
            draggable
            onDragStart={e => handleDragStart(e, task.id, 'done')}
          >
            {task.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
