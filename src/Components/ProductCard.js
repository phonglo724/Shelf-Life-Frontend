import React, { useState } from 'react';
import Moment from 'react-moment';
import '../ProductCard.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Popper from '@material-ui/core/Popper';

export default function ProductCard(props) {

    const [quantityEdit, setQuantityEdit] = useState(false)
    const [newQuantity, setNewQuantity] = useState('')
    const [storageEdit, setStorageEdit] = useState(false)
    const [newStorage, setNewStorage] = useState('')
    const [anchorEl, setAnchorEl] = useState(null)

    const addClick = (e) => {
        props.addProductAction(props.product)
        setAnchorEl(anchorEl ? null : e.currentTarget)
    }

    const popperOpen = Boolean(anchorEl)
    const popperId = popperOpen ? 'simple-popper' : undefined

    const deleteClick = (e) => {
        e.stopPropagation()
        props.deleteProduct(props.product.id)
    }

    const changeQuantityValue = () => {
        return quantityEdit ?
        <span>
            <input type="number" value={newQuantity} onChange={(e) => setNewQuantity(e.target.value)} />
            <button onClick={(e) => {
                e.stopPropagation()
                props.handleProductUpdate(props.product, newQuantity, "quantity")
                setQuantityEdit(false)
                }}>OK</button>
        </span> :
        <span>{props.product.quantity}</span>
    }

    const changeStorageValue = () => {
        return storageEdit ?
        <span>
            <input type="text" value={newStorage} onChange={(e) => setNewStorage(e.target.value)} />
            <button onClick={(e) => {
                e.stopPropagation()
                props.handleProductUpdate(props.product, newStorage, "storage")
                setStorageEdit(false)
                }}>OK</button>
        </span> :
        <span>{props.product.storage}</span>
    }
  
    return (
        <div className="product-container">
            <div key={props.product.id} className="product-card">
                <img className="product-png" src={props.product.image} alt={props.product.name} />
                <h2>{props.product.name}</h2>
                <p>Category: {props.product.category}</p>
                <p onClick={() => {setQuantityEdit(true)}}>Quantities: {changeQuantityValue()}</p>
                <p onClick={() => {setStorageEdit(true)}}>Stored: {changeStorageValue()}</p>
                <p>Date Bought: <Moment format="MM/DD/YYYY">{props.product.dateBought}</Moment></p>
                <p>Expiration Date: <Moment format="MM/DD/YYYY">{props.product.expirationDate}</Moment></p>
                <p className="last-btn">Remaining Shelf Life: <Moment fromNow>{props.product.expirationDate}</Moment></p>
                    <ButtonGroup size="small" >
                        <Button variant="contained" onClick={addClick}>Add to Grocery List</Button>
                        <Popper id={popperId} open={popperOpen} anchorEl={anchorEl}>
                            <div className="paper-popper">Added to Grocery List</div>
                        </Popper>
                        <Button variant="contained" onClick={deleteClick}>Remove from List</Button>
                    </ButtonGroup>
            </div>
        </div>
    )
}
