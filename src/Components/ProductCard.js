import React, { useState } from 'react';
import Moment from 'react-moment';
import '../ProductCard.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

export default function ProductCard(props) {

    const [quantityEdit, setQuantityEdit] = useState(false)
    const [newQuantity, setNewQuantity] = useState('')
    const [storageEdit, setStorageEdit] = useState(false)
    const [newStorage, setNewStorage] = useState('')

    const addClick = () => {
        props.addProductAction(props.product)
    }

    const deleteClick = (e) => {
        e.stopPropagation()
        props.deleteProduct(props.product.id)
    }

    const changeQuantityValue = () => {
        return quantityEdit ?
        <span>
            <TextField id="standard-basic" style={{width: '5ch'}}type="number" value={newQuantity} onChange={(e) => setNewQuantity(e.target.value)} />
            <Button onClick={(e) => {
                e.stopPropagation()
                props.handleProductUpdate(props.product, newQuantity, "quantity")
                setQuantityEdit(false)
                }}>OK</Button>
        </span> :
        <span>{props.product.quantity}</span>
    }

    const changeStorageValue = () => {
        return storageEdit ?
        <span>
            <TextField id="standard-basic" style={{width: '10ch'}} type="text" value={newStorage} onChange={(e) => setNewStorage(e.target.value)} />
            <Button onClick={(e) => {
                e.stopPropagation()
                props.handleProductUpdate(props.product, newStorage, "storage")
                setStorageEdit(false)
                }}>OK</Button>
        </span> :
        <span>{props.product.storage}</span>
    }
  
    return (
        <Grid className="product-container">
            <Paper key={props.product.id} className="product-card">
                <img className="product-png" src={props.product.image} alt={props.product.name} />
                <h2>{props.product.name}</h2>
                <p>Remaining Shelf Life: <Moment fromNow>{props.product.expirationDate}</Moment></p>
                <p>Expiration Date: <Moment format="MM/DD/YYYY">{props.product.expirationDate}</Moment></p>
                <p>Date Bought: <Moment format="MM/DD/YYYY">{props.product.dateBought}</Moment></p>
                <p>Category: {props.product.category}</p>
                <p onClick={() => {setStorageEdit(true)}}>Stored: {changeStorageValue()}</p>
                <p className="last-btn" onClick={() => {setQuantityEdit(true)}}>Quantities: {changeQuantityValue()}</p>
                    <ButtonGroup size="small" >
                        <Button variant="contained" onClick={addClick}>Add to Grocery List</Button>
                        <Button variant="contained" onClick={deleteClick}>Remove from List</Button>
                    </ButtonGroup>
            </Paper>
        </Grid>
    )
}
