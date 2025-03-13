import React, { useState } from 'react';
import './ReviewForm.css';

function ReviewForm({ onReviewSubmit }) {
  const [formData, setFormData] = useState({
    clientName: '',
    reviewText: '',
    rating: 1
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://client-review-backend.onrender.com/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({ clientName: '', reviewText: '', rating: 1 });
        setShowThankYou(true);
        onReviewSubmit();
        setTimeout(() => {
          setShowThankYou(false);
        }, 3000); // Hide after 3 seconds
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="clientName"
          value={formData.clientName}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <textarea
          name="reviewText"
          value={formData.reviewText}
          onChange={handleChange}
          placeholder="Write your review"
          required
        />
        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        <button type="submit">Submit Review</button>
      </form>

      {showThankYou && (
        <div className="thank-you-popup">
          <div className="popup-content">
            <h3>Thank You!</h3>
            <p>We appreciate your valuable feedback.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ReviewForm; 