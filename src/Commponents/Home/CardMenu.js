import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import { Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import getClothesTypes from '../getClothesTypes';
import Button from 'react-bootstrap/Button';
import { AiFillDelete } from "react-icons/ai";
import deleteCardMenu from './deleteCardMenu';

class CardMenu extends Component {
    constructor(props) {
        super(props);
        this.getData();
        const isAuth = localStorage.getItem('isAuth');
        const isAministrator = localStorage.getItem('isAdministrator')
        this.state = {
            cards: [],
            redirect: false,
            isAuth,
            isAministrator,
            editRedirect: false,
            cardMenu: {}
        }
    }

    getData = async () => {
        const cards = await getClothesTypes();
        this.setState({
            cards: cards
        })
    }
    deleteCard = async (e, cardId) => {
        e.preventDefault();
        const isSuccessfull = await deleteCardMenu(cardId);
        if (isSuccessfull) {
            this.setState({
                cards: this.state.cards.filter((card) => card._id !== cardId)
            })

        }
        else {
            alert('Something is wrong!');
        }
    }
    updateCardMenu = (e, item) => {
        e.preventDefault();
        this.setState({
            editRedirect: true,
            cardMenu: item
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
        } else if (this.state.editRedirect) {
            return <Redirect to={{
                pathname: "/EditCardMenuForm",
                state: { cardMenu: this.state.cardMenu }
            }} />
        }
        return (
            <div className='cardMenuDiv'>
                <Container >
                    <Row >
                        {this.state.cards.map((card, index) => {
                            return (
                                <Col xs={12} s={12} md={6} lg={4} xl={3} key={index}>
                                    <Card
                                        style={{ width: '100%' }}
                                        className='cardWithTypesClothes'
                                    >
                                        <Card.Link onClick={() => this.redirectPage(card.type)}>
                                            <Card.Body >
                                                <Card.Title
                                                    className="cardHomeTitle">
                                                    <h1>{card.title}</h1>
                                                </Card.Title>
                                                <Card.Img
                                                    variant="bottom"
                                                    src={card.image}
                                                    height='200px' />
                                            </Card.Body>
                                        </Card.Link>
                                        {this.state.isAuth && this.state.isAministrator ?
                                            <div className='cardMenuButtons'><Button variant="dark" onClick={(e) => this.updateCardMenu(e, card)}>Edit</Button> <Button variant="dark" onClick={(e) => this.deleteCard(e, card._id)}><AiFillDelete /></Button></div>
                                            : ''}
                                    </Card>
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