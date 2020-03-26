import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

class ChooseSizeButton extends Component {
    render() {
        return (
            <div >
            <DropdownButton
             
                id={`dropdown-variants-Secondary`}
                title="Choose size"
                variant="outline-dark"
            >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" active> Active Item</Dropdown.Item>
            </DropdownButton>
            </div>
        )
    }
}
export default ChooseSizeButton