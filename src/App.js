import React, { Component } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom';
import Header from "./Commponents/Header";
import Footer from "./Commponents/Footer";
import PageOneProduct from "./Commponents/PageOneProduct/PageOneProduct";
import Catalog from "./Commponents/Catalog/Catalog"
import HomePage from "./Commponents/Home/HomePage"
import LoginPage from "./Commponents/Login/LoginPage"
import SignupPage from "./Commponents/Signup/SignupPage"
class App extends Component {
  render() {
        return (
          <Router>
          <div className="App">
            <Header />
            <Route exact path="/"  component={HomePage}/>
            <Route exact path="/Catalog" component={Catalog} />
          <Route path={"/Product/:id"} component={PageOneProduct} />
          <Route path="/Login" component={LoginPage} />
          <Route path ="/Signup" component={SignupPage} />
            <Footer />
          </div>
          </Router>
        );
  }
}
export default App;
