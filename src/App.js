import React, { Component, Fragment } from "react";
import './App.css';
import fridge from "./images/fridge.png"
import freezer from "./images/freezer.png"
import pantry from "./images/pantry.png"
import ProductPage from './Components/ProductPage';

const baseURL = "http://localhost:9000/products"

class App extends Component {

  state = {
    products: [],
    showProducts: false,
    filteredProducts: []
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
    fetch(baseURL)
      .then(response => response.json())
      .then(products => this.setState({products}))
  }

  render() {
    return (
      <div className="App" >
          <h1 className="title" onClick={(e) => this.backButton(e)}>SHELF LIFE</h1>
            {this.state.showProducts 
            ? <ProductPage products={this.state.filteredProducts} selectedProduct={this.selectedProduct} /> 
            : 
            <Fragment>
              <img className="freezer" id="Freezer" alt="freezer" src={`${freezer}`} onClick={(e) => this.selectedProduct(e)} />
              <img className="fridge" id="Fridge" alt="fridge" src={`${fridge}`} onClick={(e) => this.selectedProduct(e)} />
              <img className="pantry" id="Pantry" alt="pantry" src={`${pantry}`} onClick={(e) => this.selectedProduct(e)} />
            </Fragment>}
      </div>
    );
  }
}

export default App;
