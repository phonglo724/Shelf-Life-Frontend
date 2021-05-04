import React from 'react'
import ProductCard from './ProductCard'

export default function Products(props) {

    const displayProducts = () => props.products.map(product => {
        return <ProductCard
            key={product.id}
            product={product}
            selectedProduct={props.selectedProduct}
            backButton={props.backButton}
        />
    })

    return (
        <div className="product-container">
            <form>
                <label for="category">Choose a category:</label>
                    <select name="category" id="category" >
                        <option value="Beverages">Beverages</option>
                        <option value="Fruit">Fruit</option>
                        <option value="Meat and Seafood">Meat & Seafood</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Condiments and Spices">Condiments & Spices</option>
                        <option value="Grains and Bread">Grains & Bread</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Sauces and Oils">Sauces & Oils</option>
                        <option value="Other">Other</option>
                    </select>
            </form>
            <ul>
                { displayProducts() }
            </ul>
        </div>
    )
}
