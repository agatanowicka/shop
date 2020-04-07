import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


class CreateAnAccountButton extends Component {
    render() {
        return (
            <div>
                 <Button href="http://localhost:3000/Signup" style={{backgroundColor:"#E7B2A5",borderColor:"rgb(240, 130, 198)",borderWidth:"3px", color:"rgb(51, 50, 50)"}} variant="outline-danger" className="createAnAccountButton" >Create an account</Button>
            </div>
        )
    }

}
export default CreateAnAccountButton