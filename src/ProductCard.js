import React, { useState } from 'react';
import './style.css'; // Import the CSS file

function ProductCard() {
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    if (review.trim()) {
      setReviews([...reviews, review]);
      setReview('');
    }
  };

  return (
    <div className="ProductCard">
      <h3>Product Name</h3>
      <p>Awesome product description goes here.</p>
      <form onSubmit={handleReviewSubmit}>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here"
          rows="4"
        />
        <button type="submit">Submit Review</button>
      </form>
      <h4>Reviews:</h4>
      <ul>
        {reviews.map((r, index) => (
          <li key={index}>{r}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCard;
