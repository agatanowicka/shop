import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import { Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import getClothesTypes from '../getClothesTypes';

class CardMenu extends Component {
    constructor(props) {
        super(props);
        this.getData();
        this.state = {
            cards: [],
            redirect: false
        }
    }

    getData = async () => {
        const cards = await getClothesTypes();
        this.setState({
            cards: cards
        })
    }

    redirectPage = (type) => {
        this.setState({
            redirect: type
        })
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: "/Catalog/" + this.state.redirect,
            }} />
        }
        return (
            <div>
                <Container >
                    <Row >
                        {this.state.cards.map(card => {
                            return (
                                <Col xs={12} s={12} md={6} lg={4}>
                                    <a onClick={() => this.redirectPage(card.type)}>
                                        <Card
                                            style={{ width: '300px' }}
                                            className='cardWithTypesClothes'
                                        >
                                            <Card.Body >
                                                <Card.Title
                                                    className="cardHomeTitle">
                                                    <h1>{card.title}</h1>
                                                </Card.Title>
                                                <Card.Img
                                                    variant="bottom"
                                                    src={card.image}
                                                    height='250px' />
                                            </Card.Body>
                                        </Card>
                                    </a>
                                </Col>)
                        })
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CardMenu