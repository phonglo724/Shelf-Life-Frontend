# README
# SHELF LIFE
> A web application to keep track of your groceries before they spoil in either the freezer, fridge, or pantry.

## Table of contents
* [General info](#general-info)
* [Intro Video](#intro-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)


## General info
Shelf Life is a full stack web application allowing users to view their groceries in three different storage categories: freezer, fridge, or pantry. Discover what is inside each storage by clicking on their image. By selecting a storage you can then view the specific food items located in that storage. There you will find important information regarding the remaining shelf life of an item, including, date bought, date it expires, where the item is stored, which food category the item fits in, and the number of items remaining.

## Intro Video
[Shelf Life on YouTube](https://youtu.be/VtisiK-nUbI)

## Technologies
* React - version 17.0.2
* React DOM - version 17.0.2
* React Moment - version 1.1.1
* React Router DOM - version 5.2.0
* Material UI - version 4.11.4

## Setup
To run this website, install it locally by cloning the GitHub repository. Run:
``` 
npm run server

```

## Code Examples
```React
  handleProductUpdate = (product, updatedValue, productQuantity) => {
      const products = [...this.state.products]
      const newProduct = products.find(item => {
        return item.id === product.id
      })
      if(productQuantity === "quantity"){
        newProduct.quantity = updatedValue
      } else {
        console.log('productQuantity', productQuantity)
        newProduct.storage = updatedValue
      }
      this.setState({
        products: products
      })
    }
```

```Material UI
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
```

## Features
* Each item is filtered according to where it is stored
* Change quantities of items in each card
* Product page is responsive

To-do list:
* Add a form to add more items
* Have updated quantities persist in the backend when changed by user
* User log-in and log-out

## Status
Project is: finished with all functionality -- outside of the to-do list.

## Inspiration
The inspiration for Shelf Life comes from personal experience. I enjoy cooking as a form a therapy, but my biggest problem when preparing a meal is discovering spoiled food! Because life gets so busy and I tend to forget what I bought from the supermarket. So I decided to build an app to help me resolve this issue.

## Contact
Created by [Phong Lo](https://www.linkedin.com/in/phong-lo)

Feel free to contact me! :smile: