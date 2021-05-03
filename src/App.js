import React, { Component } from "react";
import './App.css';
import fridge from "./images/fridge.png"
import ProductContainer from './Components/ProductContainer';

const baseURL = "http://localhost:9000/products"

class App extends Component {

  state = {
    products: [],
    correct: false
  }

  clickedFridge = () => {
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
          {this.state.correct ? <ProductContainer products={this.state.products} /> : <img className="fridge" alt="fridge" src={`${fridge}`} onClick={this.clickedFridge}/>}
      </div>
    );
  }
}

export default App;
