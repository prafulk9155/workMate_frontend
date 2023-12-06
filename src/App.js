import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import AddTasks from './components/AddTasks'; 
import Dashboard from './components/Dashboard';
import Home from './components/Homepage';
import Kanban from './components/Kanban';
import 'bootstrap/dist/css/bootstrap.min.css';


// import Home from './components/Home'; // Update the path based on your actual structure

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route to the SignupForm component */}
          <Route path="" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/add" element={<AddTasks />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/kanban" element={<Kanban />} />

          {/* Define other routes as needed */}
          {/* For example, a route to the home page */}
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
