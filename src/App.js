import React, { Component } from "react";
import './App.css';
import Products from './Components/Products';

const baseURL = "http://localhost:9000/products"

class App extends Component {

  state = {
    products: []
  }

  componentDidMount() {
    fetch(baseURL)
      .then(response => response.json())
      .then(products => this.setState({products}))
  }

  render() {
    return (
      <div className="App">
          <Products products={this.state.products} />
      </div>
    );
  }
}

export default App;
