import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { FaShoppingCart } from "react-icons/fa";

function Header(props) {

    return (

        <Nav
            defaultActiveKey="/home" as="ul"
            className="header"
        >
            <Nav.Item>
                <Nav.Link className="linkItem" href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="linkItem" href="/Catalog" > Colection</Nav.Link>
            </Nav.Item>

            {!props.isAuth ? <Nav.Item><Nav.Link className="linkItem" href="/Login">LogIn</Nav.Link></Nav.Item> : ''}

            {props.isAuth && props.isAdminisrator ? <Nav.Item><Nav.Link className="linkItem" href="/AddNewProductForm">Add product</Nav.Link></Nav.Item> : ''}
            {props.isAuth && props.isAdminisrator ? <Nav.Item><Nav.Link className="linkItem" href="/CardMenuForm">Add card menu</Nav.Link></Nav.Item> : ''}
       
            <Nav.Item>
                <Nav.Link className="linkItem" href="/SchoppingBasket" ><FaShoppingCart /> </Nav.Link>
            </Nav.Item>
        </Nav>

    )
}
export default Header