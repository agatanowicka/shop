import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { FaShoppingCart } from "react-icons/fa";
import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import getClothesTypes from './getClothesTypes';

class Header extends Component {
    constructor(props) {
        super(props);
        this.getData();
        this.state = {
            types: []
        }
    }
    getData = async () => {
        const types = await getClothesTypes();
        this.setState({
            types: types
        })
    }
    render() {
        return (
            <Navbar
                fixed="top"
                collapseOnSelect
                expand="lg"
                className="header justify-content-between"
            >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" >
                        <Nav.Link
                            href="/"
                            className='linkItem'
                            style={{ color: "white" }}>
                            Home
                        </Nav.Link>
                        <OverlayTrigger
                            trigger="click"
                            placement="bottom"
                            overlay={
                                <Tooltip >
                                    {this.state.types.map((type, index) => {
                                        const path = `/Catalog/${type.type}`
                                        const name=type.type.toUpperCase();
                                        return (
                                            <Nav.Link
                                                key={index}
                                                href={path}
                                                style={{ color: 'white' }}>
                                                {name}
                                            </Nav.Link>
                                        )
                                    })}
                                </Tooltip>
                            }
                        >
                            <Nav.Link
                                className='linkItem'
                                style={{ color: "white" }}>
                                Colection
                                  </Nav.Link>
                        </OverlayTrigger>

                        {this.props.isAuth && this.props.isAministrator ?
                            <Nav.Link
                                href="/AddNewProductForm"
                                className='linkItem'
                                style={{ color: "white" }}>
                                Add product
                             </Nav.Link>
                            : ''}
                        {this.props.isAuth && this.props.isAministrator ?
                            <Nav.Link
                                href="/CardMenuForm"
                                className='linkItem'
                                style={{ color: "white" }}>
                                Add card menu
                             </Nav.Link>
                            : ''}
                    </Nav> <Nav >
                        <Nav.Link
                            href="/SchoppingBasket"
                            className='linkItem'
                            style={{ color: "white" }}>
                            <FaShoppingCart />
                        </Nav.Link>
                        {!this.props.isAuth ?
                            <Nav.Link
                                href="/Login"
                                className='linkItem'
                                style={{ color: "white" }}>
                                LogIn
                              </Nav.Link>
                            : <Nav.Link
                                className='linkItem'
                                href='/Logout'
                                style={{ color: "white" }}>
                                Logout
                            </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Header