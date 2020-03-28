import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'

function Header() {
    return (
        
            <Nav
               defaultActiveKey="/home" as="ul"
               className="header"
            >
                <Nav.Item>
                    <Nav.Link className="linkItem" href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="linkItem" href="/Catalog">Colection</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  className="linkItem" eventKey="">LogIn</Nav.Link>
                </Nav.Item>
                
            </Nav>
       
    )
}
export default Header