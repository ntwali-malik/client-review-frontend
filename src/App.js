import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReviewForm from './components/ReviewForm';
import AdminDashboard from './components/Admin/AdminDashboard';
import ReviewList from './components/ReviewList';
import './App.css';

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('https://client-review-backend.onrender.com/api/reviews');
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleReviewSubmit = () => {
    fetchReviews(); // Refresh the reviews after a new one is submitted
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div>
              <h1>Customer Feedback</h1>
              <ReviewForm onReviewSubmit={handleReviewSubmit} />
              <ReviewList reviews={reviews} />
            </div>
          } />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
