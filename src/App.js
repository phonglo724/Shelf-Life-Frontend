import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
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
    shoppingLists: [],
    storage: ""
  }

  handleCategoryFilter = (updatedCategory) => {
    console.log('category filter')
    const categoryProduct = this.state.products.filter(product => {
      return product.category === updatedCategory && product.storage === this.state.storage
    })
    this.setState({
      filteredProducts: categoryProduct
    })
  }

  handleProductUpdate = (product, updatedValue, productQuantity) => {
    // fetch(`${productsURL}${product}`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   body: JSON.stringify({
    //     quantity: "",
    //     storage: ""
    //   })
    // })
    // .then(response => {
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
  // )}
  

  addProductToShoppingList = (product) => {
    // console.log('addProductToShoppingList')
    const list = this.state.shoppingLists.find(item => {
      return item.id === product.id
    })
    if(!list){
      this.setState({
        shoppingLists: [...this.state.shoppingLists, product]
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
      storage: e.currentTarget.id,
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
        <NavLink to="/" style={{textDecoration: 'none'}}>
          <h1 className="title" onClick={(e) => this.backButton(e)}>Shelf Life</h1>
        </NavLink>
        <Route exact path="/">
            {this.state.showProducts 
            ? <ProductPage 
                products={this.state.filteredProducts} 
                selectedProduct={this.selectedProduct} 
                addProductAction={this.addProductToShoppingList}
                deleteProduct={this.deleteProduct}
                handleProductUpdate={this.handleProductUpdate}
                handleCategoryFilter={this.handleCategoryFilter}
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
          </Route>
          <Switch>
            <Route exact path="/lists">
                <GroceryListPage shoppingLists={this.state.shoppingLists}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
