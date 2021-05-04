import React from 'react'
import ProductCard from './ProductCard'

export default function Products(props) {

    const displayProducts = () => props.products.map(product => {
        return <ProductCard
            key={product.id}
            product={product}
        />
    })

    return (
        <div className="product-container">
            <ul>
            { displayProducts() }
            </ul>
        </div>
    )
}
