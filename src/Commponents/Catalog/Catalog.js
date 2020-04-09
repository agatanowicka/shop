import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card"

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.getAllProducts();
        this.state = {
            clothes: []
        }
    }
    getAllProducts() {
        debugger;
        const type = this.props.match.params.type;
        
let path='';
if(type) {
    path = `type=${type}`;
}
        fetch(`http://localhost:8080/colection/product?${path}`, { method: 'GET' })
            .then(res => {
                debugger;
                if (res.status !== 200) {
                    return alert('Failed to fetch status')
                }
                return res.json();
            })
            .then(resData => {
                this.setState({
                    clothes: resData
                })
            })
            .catch(err => {
                debugger;
                console.log(err);
            })
    }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        {this.state.clothes.map(item => {
                            return (
                                <Col xs={12} md={4}>

                                    <Card name={item.name} image={item.images} price={item.price} productId={item._id} />

                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Catalog;