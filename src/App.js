import React, { Component } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom';
import Header from "./Commponents/Header";
import Footer from "./Commponents/Footer";
import PageOneProduct from "../src/Commponents/PageOneProduct/PageOneProduct";
import Catalog from "../src/Commponents/Catalog/Catalog"
import HomePage from "../src/Commponents/Home/HomePage"
export class App extends Component {
  render() {
        return (
          <Router>
          <div className="App">
            <Header />
            <Route exact path="/"  component={HomePage}/>
            <Route exact path="/Catalog" component={Catalog} />
          <Route path="/Product" component={PageOneProduct} />
            <Footer />
          </div>
          </Router>
        );
  }
}
export default App;
