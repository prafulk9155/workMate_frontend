import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import AddTasks from './components/AddTasks'; 
import Dashboard from './components/Dashboard';
import Home from './components/Homepage';
import Kanban from './components/Kanban';
import UserTable from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import UserTable from './components/UserTable';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Task Management System</h1>
          <nav>
            <Link to="/" className="nav-button" >Home</Link>
            <Link to="/dashboard" className="nav-button">Dashboard</Link>
            <Link to="/kanban" className="nav-button">Kanban</Link>
            <Link to="/task" className="nav-button">Task</Link>
            <Link to="/signup" className="nav-button">Sign Up</Link>
            <Link to="/user-list" className="nav-button">User List</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/task" element={<AddTasks />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/user-list" element={<UserTable />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
