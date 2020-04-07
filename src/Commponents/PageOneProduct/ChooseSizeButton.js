import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function ChooseSizeButton(props) {
    return (
        <div >
            <DropdownButton
                id={`dropdown-variants-Secondary`}
                title="Choose size"
                variant="outline-dark"
            >
                {props.sizes.map(size => {
                    return(
                     <Dropdown.Item eventKey={"size"}>{size}</Dropdown.Item>)
                })};
            </DropdownButton>
        </div>
    )

}
export default ChooseSizeButton