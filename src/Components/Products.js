import React from 'react'
import ProductCard from './ProductCard'

export default function Products(props) {

    const displayProducts = () => {
        return props.products.map(product => 
        <ProductCard product={product}/> )
    }

    return (
        <div>
            {displayProducts()}
        </div>
    )
}
