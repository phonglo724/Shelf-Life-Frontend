import React from 'react';

export default function GroceryListPage(props) {

    const displayGroceryList = () => {
        return (
            <ul>
                {props.shoppingLists.map(item => {
                    return <li key={item.id}>{item.name}</li>})
                }
            </ul>
        )
    }

    return (
        <ul>
            { displayGroceryList() }
        </ul>
    )
}