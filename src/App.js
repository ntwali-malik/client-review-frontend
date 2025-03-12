import React, { useState, useEffect } from 'react';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import './App.css';

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('https://client-review-backend.vercel.app/');
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  return (
    <div className="App">
      <h1>Customer Reviews</h1>
      <ReviewForm onReviewSubmit={fetchReviews} />
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default App;
