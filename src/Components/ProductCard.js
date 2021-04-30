import React from 'react';
import Moment from 'react-moment';

export default function ProductCard(props) {
    return (
        <div>
            <h1>{props.product.name}</h1>
            <img src={props.product.image} alt="banana" />
            <Moment format="MM/DD/YYYY">{props.product.dateBought}</Moment>
            <Moment format="MM/DD/YYYY">{props.product.expirationDate}</Moment>
        </div>
    )
}
