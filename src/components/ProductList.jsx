import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ selectedCategory, addToCart, cart }) => {
  const filteredProducts = selectedCategory === 'All' 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === selectedCategory)

  if (filteredProducts.length === 0) {
    return (
      <div>
        <h2>Available Products</h2>
        <p>No products available in this category.</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Available Products</h2>

      {filteredProducts.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart}
          cart={cart}
        />
      ))}
    </div>
  )
}

export default ProductList