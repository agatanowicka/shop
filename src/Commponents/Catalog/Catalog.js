import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "./Card";
import deleteCard from './deleteCard';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.getAllProducts();
        this.state = {
            clothes:[]
        }

    }
    deleteProductCard = async (e, cardId) => {
        e.preventDefault();
        const isSuccessfull = await deleteCard(cardId);
        if (isSuccessfull) {
            this.setState({
                clothes: this.state.clothes.filter((card) => card._id != cardId)
            })

        }
        else {
            alert('Something is wrong!');
        }
    }
    getAllProducts() {
        let type = this.props.match.params.type;
        let path = '';
        if (type) {
            path = `type=${type}`;
        }
        fetch(`http://localhost:8080/colection/product?${path}`, { method: 'GET' })
            .then(res => {
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
                console.log(err);
            })
    }
    render() {
        return (
            <div>
                <Container className='catalogContainer'>
                    <Row >
                        {this.state.clothes.map(item => {
                            return (
                                <Col s={6} md={6} lg={4} key={item._id}>
                                    <Card
                                        name={item.name}
                                        image={item.images}
                                        price={item.price}
                                        productId={item._id}
                                        deleteCard={(e)=>this.deleteProductCard(e, item._id)}
                                    />
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