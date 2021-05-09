import React from 'react'
import '../ProductCard.css';
import ProductCard from './ProductCard'
import ProductForm from './ProductForm'

export default function ProductPage(props) {

    const displayProducts = () => props.products.map(product => {
        return <ProductCard
            key={product.id}
            product={product}
            selectedProduct={props.selectedProduct}
            onClick={props.backButton}
            addProductAction={props.addProductAction}
            deleteProduct={props.deleteProduct}
            handleProductUpdate={props.handleProductUpdate}
        />
    })

    return (
        <div>
            <ProductForm 
                handleCategoryFilter={props.handleCategoryFilter}
            />
            <ul className="display-products">
                { displayProducts() }
            </ul>
        </div>
    )
}
