import React from "react";

const products = [
  { id: 1, name: "Laptop", description: "High-performance laptop", color: "Silver" },
  { id: 2, name: "Smartphone", description: "Latest model smartphone", color: "Black" },
  { id: 3, name: "Headphones", description: "Noise-canceling headphones", color: "Blue" },
  { id: 4, name: "Smartwatch", description: "Waterproof smartwatch", color: "Red" },
];

const ProductList = () => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Color:</strong> {product.color}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
