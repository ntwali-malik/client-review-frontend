import React from 'react';
import ReviewCard from './ReviewCard';
import './ReviewList.css';

function ReviewList({ reviews }) {
  return (
    <div className="reviews-container">
      {reviews.map(review => (
        <ReviewCard key={review._id} review={review} />
      ))}
    </div>
  );
}

export default ReviewList; 