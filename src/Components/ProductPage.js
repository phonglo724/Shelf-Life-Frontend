import React from 'react'
import ProductCard from './ProductCard'
import ProductForm from './ProductForm'

export default function ProductPage(props) {

    const displayProducts = () => props.products.map(product => {
        return <ProductCard
            key={product.id}
            product={product}
            selectedProduct={props.selectedProduct}
            changedEditMode={props.changedEditMode}
            onClick={props.backButton}
            addProductAction={props.addProductAction}
            deleteProduct={props.deleteProduct}
            handleProductUpdate={props.handleProductUpdate}
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
