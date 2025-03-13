import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReviewForm from './components/ReviewForm';
import AdminDashboard from './components/Admin/AdminDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div>
              <h1>Customer Feedback</h1>
              <ReviewForm />
            </div>
          } />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
