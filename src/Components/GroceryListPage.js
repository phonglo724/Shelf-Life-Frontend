import React from 'react';
import ProductCard from '../Components/ProductCard';

export default function GroceryListPage(props) {

    const displayGroceryList = () => props.shoppingLists.map(shoppingList => {
        return <ProductCard 
            key={props.product.id}
            product={props.roduct}
            selectedProduct={props.selectedProduct}
            onClick={props.backButton}
            addProductAction={props.addProductToShoppingList}
            deleteProduct={props.deleteProduct}
        />
    })

    return (
        <ul>
            { displayGroceryList() }
        </ul>
    )
}