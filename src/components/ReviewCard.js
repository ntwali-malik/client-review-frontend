import React from 'react';
import './ReviewCard.css';

function ReviewCard({ review }) {
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="review-card">
      <h3>{review.clientName}</h3>
      <p>{review.reviewText}</p>
      <div className="rating-stars">{renderStars(review.rating)}</div>
      <div className="review-date">
        {new Date(review.createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </div>
    </div>
  );
}

export default ReviewCard; 