import React from 'react';

const FeaturedSection = ({ products }) => {
  // Sample data for featured products (replace with your actual data)

  return (
    <div className="featured-section">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.slice(0, 8).map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '200px', height: '200px' }} // Set a fixed width and height
            />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
