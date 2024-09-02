import React, { useState, useEffect, useContext, useReducer, createContext } from 'react';
import './style.css'; // Import the CSS file

// Create a context for the default review text
const ReviewContext = createContext('This is a default review.');

// Reducer function to manage reviews
const reviewReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      return [...state, action.payload];
    case 'CLEAR_REVIEWS':
      return [];
    default:
      return state;
  }
};

function ProductCard({ color }) {
  const [review, setReview] = useState('');
  const [reviews, dispatch] = useReducer(reviewReducer, []);
  const defaultReview = useContext(ReviewContext); // Use context for default review text

  useEffect(() => {
    console.log('ProductCard component mounted or updated.');
    // Demonstrate effect: Log the current color and number of reviews
    console.log(`Current border color: ${color}`);
    console.log(`Number of reviews: ${reviews.length}`);

    // Cleanup function to log when the component unmounts
    return () => {
      console.log('ProductCard component is unmounting.');
    };
  }, [color, reviews]); // Dependencies: run effect when color or reviews change

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    if (review.trim()) {
      dispatch({ type: 'ADD_REVIEW', payload: review });
      setReview('');
    }
  };

  const clearReviews = () => {
    dispatch({ type: 'CLEAR_REVIEWS' });
  };

  return (
    <div className="ProductCard" style={{ backgroundColor: color }}>
      <h3>Product Name</h3>
      <p>Awesome product description goes here.</p>
      <form onSubmit={handleReviewSubmit}>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder={defaultReview} // Display default review from context
          rows="4"
        />
        <button type="submit">Submit Review</button>
      </form>
      <button onClick={clearReviews} className="btn btn-danger mt-3">
        Clear All Reviews
      </button>
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
