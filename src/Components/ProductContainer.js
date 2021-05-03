import React from 'react'
import ProductCard from './ProductCard'
import '../ProductContainer.css'

export default function Products(props) {

    const displayProducts = () => {
        return props.products.map(product => 
        <ProductCard key={product.id} product={product}/> )
    }

    return (
        <div className="product-container">
            { displayProducts() }
        </div>
    )
}
