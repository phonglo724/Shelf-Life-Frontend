import React, { Component } from "react";
import './App.css';
import fridge from "./images/fridge.png"
import freezer from "./images/freezer.png"
import pantry from "./images/pantry.png"
import ProductPage from './Components/ProductPage';

const baseURL = "http://localhost:9000/products"

class App extends Component {

  state = {
    products: [],
    correct: false
  }

  clickedStorage = () => {
    this.setState({
      correct: true
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
          <h1 className="title">SHELF LIFE</h1>
          {this.state.correct 
          ? <ProductPage products={this.state.products} /> 
          : <img className="freezer" alt="freezer" src={`${freezer}`} onClick={this.clickedStorage}/>}
          {this.state.correct 
          ? <ProductPage products={this.state.products} /> 
          : <img className="fridge" alt="fridge" src={`${fridge}`} onClick={this.clickedStorage}/>}
          {this.state.correct 
          ? <ProductPage products={this.state.products} /> 
          : <img className="pantry" alt="pantry" src={`${pantry}`} onClick={this.clickedStorage}/>}
      </div>
    );
  }
}

export default App;
