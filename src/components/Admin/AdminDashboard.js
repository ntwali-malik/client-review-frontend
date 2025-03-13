import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

function AdminDashboard() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('https://client-review-backend.onrender.com/api/reviews');
      const data = await response.json();
      setReviews(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      try {
        const response = await fetch(`https://client-review-backend.onrender.com/api/reviews/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (response.ok) {
          fetchReviews();
        }
      } catch (error) {
        console.error('Error deleting review:', error);
      }
    }
  };

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard - Customer Reviews</h2>
      <div className="reviews-table-container">
        <table className="reviews-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Client Name</th>
              <th>Review</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map(review => (
              <tr key={review._id}>
                <td>{new Date(review.createdAt).toLocaleDateString()}</td>
                <td>{review.clientName}</td>
                <td>{review.reviewText}</td>
                <td>{review.rating}/5</td>
                <td>
                  <button 
                    className="delete-btn"
                    onClick={() => handleDelete(review._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard; 