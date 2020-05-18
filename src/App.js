import React, { Component, Fragment } from "react";
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Header from "./Commponents/Header";
import Footer from "./Commponents/Footer";
import PageOneProduct from "./Commponents/PageOneProduct/PageOneProduct";
import Catalog from "./Commponents/Catalog/Catalog";
import HomePage from "./Commponents/Home/HomePage";
import LoginPage from "./Commponents/Authorization/Login/LoginPage";
import SignupPage from "./Commponents/Authorization/Signup/SignupPage";
import CardMenuForm from "./Commponents/AdministratorPages/CardMenuForm";
import AddNewProductForm from './Commponents/AdministratorPages/AddNewProductForm';
import SchoppingBasketPage from './Commponents/SchoppingBasket/SchoppingBasketPage';
import Logout from './Commponents/Authorization/Logout/Logout';
class App extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem('token');
    const isAuth = localStorage.getItem('isAuth');
    const isAministrator=localStorage.getItem('isAdministrator');
    this.state = {
      isAuth,
      token,
      isAministrator,
    }
  }
  render() {
    let routes = (
      <Switch>
        <Route
          path="/"
          exact
          render={props => (
            <HomePage
              token={this.state.token}
            />
          )}
        />
        <Route
          path="/Catalog"
          exact
          render={props => (
            <Catalog
              {...props}
              token={this.state.token}
            />
          )}
        />
        <Route
          path="/Catalog/:type"
          exact
          location={this.props.location}
          key={this.props.location.key}
          render={props => (
            <Catalog
              {...props}
              token={this.state.token}
              key={this.props.location.key}
            />
          )}
        />
        <Route
          path="/Product/:id"
          exact
          render={props => (
            <PageOneProduct
              {...props}
              token={this.state.token}
            />
          )}
        />
        <Route
          path="/SchoppingBasket"
          exact
          render={props => (
            <SchoppingBasketPage
              {...props}
              token={this.state.token}
              isAuth={this.state.isAuth}
            />
          )}
        />
        <Route
          path="/Login"
          exact
          render={props => (
            <LoginPage
              {...props}
            />
          )}
        />
        <Route
          path="/Logout"
          exact
          render={props => (
            <Logout
              {...props}
            />
          )}
        />
        <Route
          path="/Signup"
          exact
          render={props => (
            <SignupPage
              {...props}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
    );
    if (this.state.isAuth && this.state.isAministrator) {
      routes = (
        <Switch>
             <Route
          path="/"
          exact
          render={props => (
            <HomePage
              token={this.state.token}
            />
          )}
        />
        <Route
          path="/Catalog"
          exact
          render={props => (
            <Catalog
              {...props}
              token={this.state.token}
            />
          )}
        />
        <Route
          path="/Catalog/:type"
          exact
          location={this.props.location}
          key={this.props.location.key}
          render={props => (
            <Catalog
              {...props}
              token={this.state.token}
              key={this.props.location.key}
            />
          )}
        />
        <Route
          path="/Product/:id"
          exact
          render={props => (
            <PageOneProduct
              {...props}
              token={this.state.token}
            />
          )}
        />
        <Route
          path="/SchoppingBasket"
          exact
          render={props => (
            <SchoppingBasketPage
              {...props}
              token={this.state.token}
              isAuth={this.state.isAuth}
            />
          )}
        />
        <Route
          path="/Login"
          exact
          render={props => (
            <LoginPage
              {...props}
            />
          )}
        />
        <Route
          path="/Logout"
          exact
          render={props => (
            <Logout
              {...props}
            />
          )}
        />
        <Route
          path="/Signup"
          exact
          render={props => (
            <SignupPage
              {...props}
            />
          )}
        />
          <Route
            path="/CardMenuForm"
            exact
            render={props => (
              <CardMenuForm
                token={this.state.token}
              />
            )}
          />
          <Route
            path="/AddNewProductForm"
            render={props => (
              <AddNewProductForm
                {...props}
                token={this.state.token}
              />
            )}
          />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <Fragment>
        <Header
          isAuth={this.state.isAuth}
          isAministrator={this.state.isAministrator}
        />
        {routes}
        <Footer />
      </Fragment>
    );
  }
}
export default withRouter(App);
