import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import fridge from "./images/fridge.png"
import freezer from "./images/freezer.png"
import pantry from "./images/pantry.png"
import ProductPage from './Components/ProductPage';
import NavBar from './Components/NavBar';
import GroceryListPage from './Components/GroceryListPage';

const baseURL = ("http://localhost:9000/")
const productsURL = (`${baseURL}products/`)
const groceryListURL = (`${baseURL}lists/`)

class App extends Component {

  state = {
    products: [],
    showProducts: false,
    filteredProducts: [],
    shoppingLists: []
  }

  addProductToShoppingList = (productId) => {
    const list = this.state.products.find(product => {
      return product.id === productId.id
    })
    if(!list){
      this.setState({
        shoppingLists: [...this.state.shoppingLists, list]
      })
    }
  }
    

  deleteProduct = (productId) => {
    // console.log('deleteProduct')
    fetch(`${productsURL}${productId}`, {
      method: "DELETE",
    })
      .then(response => {
        const remainingFilteredProducts = this.state.filteredProducts.filter(filteredProduct => {
          return filteredProduct.id !== productId
        })
        const remainingProducts = this.state.products.filter(product => {
          return product.id !== productId
        })
        this.setState({
          products: remainingProducts,
          filteredProducts: remainingFilteredProducts
        })
      })
  }

  selectedProduct = (e) => {
    const storage = this.state.products.filter(specificProduct => {
      // console.log(specificProduct.storage, e.currentTarget.id)
      return specificProduct.storage === e.currentTarget.id
    })
    this.setState({
      filteredProducts: storage,
      showProducts: true
    })
  }

  backButton = (e) => {
    this.setState({
      showProducts: false
    })
  }

  componentDidMount() {
    fetch(productsURL)
      .then(response => response.json())
      .then(products => this.setState({products}))
    fetch(groceryListURL)
      .then(response => response.json())
      .then(shoppingLists => this.setState({shoppingLists}))
  }

  render() {
    return (
      <div className="App" >
        <BrowserRouter>
        <NavBar />
        <Switch>
          <Route component={GroceryListPage} path='' exact />
        </Switch>
        </BrowserRouter>
          <h1 className="title" onClick={(e) => this.backButton(e)}>Shelf Life</h1>
            {this.state.showProducts 
            ? <ProductPage 
                products={this.state.filteredProducts} 
                shoppingLists={this.state.shoppingLists}
                selectedProduct={this.selectedProduct} 
                addProductAction={this.addProductToShoppingList}
                deleteProduct={this.deleteProduct}
              /> 
            : 
            <Fragment>
              <img 
                className="freezer" 
                id="Freezer" 
                alt="freezer" 
                src={`${freezer}`} 
                onClick={(e) => this.selectedProduct(e)} 
              />
              <img 
                className="fridge" 
                id="Fridge" 
                alt="fridge" 
                src={`${fridge}`} 
                onClick={(e) => this.selectedProduct(e)} 
              />
              <img 
                className="pantry" 
                id="Pantry" 
                alt="pantry" 
                src={`${pantry}`} 
                onClick={(e) => this.selectedProduct(e)} 
              />
            </Fragment>}
      </div>
    );
  }
}

export default App;
