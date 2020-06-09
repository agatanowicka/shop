import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import PageOneProduct from "./Commponents/PageOneProduct/PageOneProduct";
import Catalog from "./Commponents/Catalog/Catalog";
import HomePage from "./Commponents/Home/HomePage";
import LoginPage from "./Commponents/Authorization/Login/LoginPage";
import SignupPage from "./Commponents/Authorization/Signup/SignupPage";
import CardMenuForm from "./Commponents/AdministratorPages/AddCardMenu/CardMenuForm";
import AddNewProductForm from './Commponents/AdministratorPages/AddNewProduct/AddNewProductForm';
import SchoppingBasketPage from './Commponents/SchoppingBasket/SchoppingBasketPage';
import Logout from './Commponents/Authorization/Logout/Logout';

function allRoutes(props) {

    let routes = (
        <Switch>
            <Route
                path="/"
                exact
                render={props => (
                    <HomePage
                        token={props.token}
                    />
                )}
            />
            <Route
                path="/Catalog"
                exact
                render={props => (
                    <Catalog
                        {...props}
                        token={props.token}
                    />
                )}
            />
            <Route
                path="/Catalog/:type"
                exact
                location={props.location}
                key={props.location}
                render={props => (
                    <Catalog
                        {...props}
                        token={props.token}
                        key={props.location.key}
                    />
                )}
            />
            <Route
                path="/Product/:id"
                exact
                render={props => (
                    <PageOneProduct
                        {...props}
                        token={props.token}
                    />
                )}
            />
            <Route
                path="/SchoppingBasket"
                exact
                render={props => (
                    <SchoppingBasketPage
                        {...props}
                        token={props.token}
                        isAuth={props.isAuth}
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
    if (props.isAuth && props.isAministrator) {
        routes = (
            <Switch>
                <Route
                    path="/"
                    exact
                    render={props => (
                        <HomePage
                            token={props.token}
                        />
                    )}
                />
                <Route
                    path="/Catalog"
                    exact
                    render={props => (
                        <Catalog
                            {...props}
                            token={props.token}
                        />
                    )}
                />
                <Route
                    path="/Catalog/:type"
                    exact
                    location={props.location}
                    key={props.location}
                    render={props => (
                        <Catalog
                            {...props}
                            token={props.token}
                            key={props.location}
                        />
                    )}
                />
                <Route
                    path="/Product/:id"
                    exact
                    render={props => (
                        <PageOneProduct
                            {...props}
                            token={props.token}
                        />
                    )}
                />
                <Route
                    path="/SchoppingBasket"
                    exact
                    render={props => (
                        <SchoppingBasketPage
                            {...props}
                            token={props.token}
                            isAuth={props.isAuth}
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
                            token={props.token}
                        />
                    )}
                />
                <Route
                    path="/AddNewProductForm"
                    render={props => (
                        <AddNewProductForm
                            {...props}
                            token={props.token}
                        />
                    )}
                />
                <Redirect to="/" />
            </Switch>
        );
    }
    return routes
}
export default allRoutes