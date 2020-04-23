import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    getDetails = () => {
        const text = '';
        this.setState({
            text
        })
    }
    render() {
        return (
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#details">
                        <Nav.Item>
                            <Nav.Link onClick={this.getDetails}>Details</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='#size' >Size</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body id='fashion'>
                    <Card.Text>
                        <h5>Details:</h5> <h6> {this.props.details}</h6>
                    </Card.Text>
                    <Card.Text>
                        <h5>  Fabric:</h5> <h6>{this.props.fabric}</h6>
                    </Card.Text>
                    <Card.Text>
                        <h5>   Type of material:</h5> <h6>{this.props.typeOfMaterial}</h6>
                    </Card.Text>
                    <Card.Text>
                        <h5>    Care tips:</h5> <h6> {this.props.careTips}</h6>
                    </Card.Text>
                </Card.Body>

            </Card>
        )
    }
}

export default Details