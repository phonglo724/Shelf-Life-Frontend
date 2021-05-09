import React from 'react';
import '../App.css';

export default function GroceryListPage(props) {

    const displayGroceryList = () => {
        return (
            <ol className="shopping-list">
                {props.shoppingLists.map(item => {
                    return <li className="shopping-list" key={item.id}>{item.name}</li>})
                }
            </ol>
        )
    }

    return (
        <ul>
            { displayGroceryList() }
        </ul>
    )
}