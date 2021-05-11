import React from 'react';
import '../App.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '../images/paper1.png'

export default function GroceryListPage(props) {

    const displayGroceryList = () => {
        return (
            <ol className="shopping-list">
                {props.shoppingLists.map(item => {
                    return <ListItemText 
                        key={item.id} 
                        primary={item.name} 
                    />})
                }
            </ol>
        )
    }

    return (
        <ListItem>
            { displayGroceryList() }
            <img 
                src={Paper} 
                alt="paper"
                id="paper"
                className="paper"
            />
        </ListItem>
    )
}