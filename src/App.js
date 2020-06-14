import React, { Component, Fragment } from "react";
import './App.css';
import { withRouter } from 'react-router-dom';
import Header from "./Commponents/Header";
import Footer from "./Commponents/Footer";
import allRoutes from './allRoutes';

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
    return (
      <Fragment>
        <Header
          isAuth={this.state.isAuth}
          isAministrator={this.state.isAministrator}
        />
        <div className='pageContent'>
        {allRoutes(this.state)}
        </div>
        <Footer />
      </Fragment>
    );
  }
}
export default withRouter(App);
