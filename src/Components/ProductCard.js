import React, { useState } from 'react';
import Moment from 'react-moment';
import '../ProductCard.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'

export default function ProductCard(props) {

    const [quantityEdit, setQuantityEdit] = useState(false)
    const [newQuantity, setNewQuantity] = useState(null)

    const addClick = (e) => {
        props.addProductAction(props.product)
    }

    const deleteClick = (e) => {
        e.stopPropagation()
        props.deleteProduct(props.product.id)
    }

    const buildQuantity = () => {
        return quantityEdit ?
        <span>
            <input type="text" value={newQuantity} onChange={(e) => setNewQuantity(e.target.value)} />
            <button onClick={(e) => {
                e.stopPropagation()
                props.handleProductUpdate(props.product, newQuantity)
                setQuantityEdit(false)
                }}>OK</button>
        </span> :
        <span>{props.product.quantity}</span>
    }
  
    return (
        <div className="product-container">
            <div key={props.product.id} className="product-card">
                <img className="product-png" src={props.product.image} alt={props.product.name} />
                <h2>{props.product.name}</h2>
                <p>Category: {props.product.category}</p>
                <p onClick={() => {setQuantityEdit(true)}}>Quantities: {buildQuantity()}</p>
                <p>Stored: {props.product.storage}</p>
                <p>Date Bought: <Moment format="MM/DD/YYYY">{props.product.dateBought}</Moment></p>
                <p>Expiration Date: <Moment format="MM/DD/YYYY">{props.product.expirationDate}</Moment></p>
                <p>Remaining Shelf Life: <Moment fromNow>{props.product.expirationDate}</Moment></p>
                    <ButtonGroup size="small" >
                        <Button variant="contained" onClick={addClick}>Add to Grocery List</Button>
                        <Button variant="contained" onClick={deleteClick}>Remove from List</Button>
                    </ButtonGroup>
            </div>
        </div>
    )
}
