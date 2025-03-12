import React, { useState } from 'react';
import './ReviewForm.css';

function ReviewForm({ onReviewSubmit }) {
  const [formData, setFormData] = useState({
    clientName: '',
    reviewText: '',
    rating: 1
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://client-review-backend.vercel.app/api/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        onReviewSubmit();
        setFormData({ clientName: '', reviewText: '', rating: 1 });
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
  );
}

export default ReviewForm; 