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
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authLoading: false,
      isAuth: false,
      token: '',
      userId: '',
      redirect: false,
      isAdministartor: false
    }
  }
  loginHandler = (event, authData) => {
    debugger;
    event.preventDefault();
    this.setState({ authLoading: true });
    fetch('http://localhost:8080/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: authData.email,
        password: authData.password
      })
    })
      .then(res => {
        if (res.status === 422) {
          console.log("Validation failed. Make sure the email address isn't used yet!");
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log('Could not authenticate you!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        this.setState({
          isAuth: true,
          token: resData.token,
          isAdministartor: resData.administrator,
          authLoading: false,
          userId: resData.userId,
          redirect: true
        });
        localStorage.setItem('token', resData.token);
        localStorage.setItem('userId', resData.userId);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem('expiryDate', expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isAuth: false,
          authLoading: false
        });
      });
  };
  setAutoLogout = milliseconds => {
    setTimeout(() => {
      this.logoutHandler();
    }, milliseconds);
  };
  logoutHandler = () => {
    this.setState({ isAuth: false, token: null });
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('userId');
  };
  render() {
    let routes = (
      <Switch>
        <Route
          path="/"
          exact
          render={props => (
            <HomePage
              userId={this.state.userId}
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
              userId={this.state.userId}
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
              userId={this.state.userId}
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
              userId={this.state.userId}
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
              userId={this.state.userId}
              token={this.state.token}
            />
          )}
        />
        <Route
          path="/Login"
          exact
          render={props => (
            <LoginPage
              {...props}
              onLogin={this.loginHandler}
              loading={this.state.authLoading}
              redirect={this.state.redirect}
            />
          )}
        />
        <Route
          path="/Signup"
          exact
          render={props => (
            <SignupPage
              {...props}
              loading={this.state.authLoading}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
    );
    if (this.state.isAuth && this.state.isAdministartor) {
      routes = (
        <Switch>
          <Route
            path="/CardMenuForm"
            exact
            render={props => (
              <CardMenuForm
                userId={this.state.userId}
                token={this.state.token}
              />
            )}
          />
          <Route
            path="/AddNewProductForm"
            render={props => (
              <AddNewProductForm
                {...props}
                userId={this.state.userId}
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
          isAdministartor={this.state.isAdministartor}
        />
        {routes}
        <Footer />
      </Fragment>
    );
  }
}
export default withRouter(App);
