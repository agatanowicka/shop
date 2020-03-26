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
                    <Nav.Link className="linkItem" href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="linkItem" eventKey="link-1">Colection</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  className="linkItem" eventKey="link-2">LogIn</Nav.Link>
                </Nav.Item>
                
            </Nav>
       
    )
}
export default Header