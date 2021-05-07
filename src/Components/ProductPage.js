import React from 'react'
import ProductCard from './ProductCard'
import ProductForm from './ProductForm'

export default function Products(props) {

    const displayProducts = () => props.products.map(product => {
        return <ProductCard
            key={product.id}
            product={product}
            selectedProduct={props.selectedProduct}
            onClick={props.backButton}
            addProductAction={props.addProductToShoppingList}
            deleteProduct={props.deleteProduct}
        />
    })

    return (
        <div>
            <ProductForm />
            <ul>
                { displayProducts() }
            </ul>
        </div>
    )
}
