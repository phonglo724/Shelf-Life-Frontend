import React from 'react';
import Moment from 'react-moment';
import '../ProductCard.css';

export default function ProductCard(props) {
    return (
        <div className="product-card">
            <h1>{props.product.name}</h1>
            <img className="product-png" src={props.product.image} alt="banana" />
            <p>Date Bought: <Moment format="MM/DD/YYYY">{props.product.dateBought}</Moment></p>
            <p>Expiration Date: <Moment format="MM/DD/YYYY">{props.product.expirationDate}</Moment></p>
            <p>{props.product.name} Remaining Shelf Life: <Moment fromNow>{props.product.expirationDate}</Moment></p>
            <p>Quantities: {props.product.quantity}</p>
            <p>Category: {props.product.category}</p>
            <p>Stored: {props.product.storage}</p>
            <button></button>
        </div>
    )
}
