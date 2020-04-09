import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import { Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class CardMenu extends Component {
    constructor(props) {
        super(props);
        this.getData();
        this.state = {
            cards: [],
            redirect: false
        }
    }

    getData = () => {
        debugger;
        fetch('http://localhost:8080/cardMenu/', { method: 'GET' })
            .then(res => {
                debugger;
                if (res.status !== 200) {
                    return alert('Failed to fetch status')
                }
                return res.json();
            })
            .then(resData => {
                this.setState({
                    cards: resData
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
    redirectPage = (type) => {
        debugger
        this.setState({
             redirect: type
        })
    }
    render() {
        if(this.state.redirect){
            return <Redirect  to={{
                pathname: "/Catalog/"+this.state.redirect,
              }} />
        }
        return (
            <div>
                <Container>
                    <Row>
                        {this.state.cards.map(card => {
                            return (
                                <Col xs={12} md={4}>
                                    <a onClick={() => this.redirectPage(card.type)}>
                                        <Card style={{ backgroundImage: this.state.image, width: '300px' }}>
                                            <Card.Body >
                                                <Card.Title className="cardHomeTitle"><h1>{card.title}</h1></Card.Title>
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