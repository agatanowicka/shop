import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns' 
class CardMenu extends Component {
    render() {
        return (
            <CardColumns className="allMenuCards">
                <Card className="dresses text-left"> 
                    <Card.Body>
                        <Card.Title className="cardHomeTitle"><h1>DRESSES</h1></Card.Title>
                    </Card.Body>
                </Card>
                <Card className="jeans ">
                    <Card.Body>
                        <Card.Title className="cardHomeTitle"><h1>JEANS</h1></Card.Title>
                    </Card.Body>
                </Card>
                <Card className="jawellery ">
                    <Card.Body>
                        <Card.Title className="cardHomeTitle"><h1>JAWELLERY</h1></Card.Title>
                    </Card.Body>
                </Card>
                <Card className="text-center coats">
                    <Card.Body>
                        <Card.Title className="cardHomeTitle"><h1>COATS</h1></Card.Title>
                    </Card.Body>
                </Card>
                <Card className="text-center tshirt">
                <Card.Body>
                        <Card.Title className="cardHomeTitle"><h1>T-SHIRTS</h1></Card.Title>
                        </Card.Body>
                </Card>
                <Card className="text-center skirts">
                <Card.Body>
                        <Card.Title className="cardHomeTitle"><h1>SKIRTS</h1></Card.Title>
                    </Card.Body>
                </Card>
                <Card className="text-right shoes">
                <Card.Body>
                        <Card.Title className="cardHomeTitle"><h1>SHOES</h1></Card.Title>
                    </Card.Body>
                </Card>
                <Card className=" blouses">
                    <Card.Body>
                        <Card.Title className="cardHomeTitle"><h1>BLOUSES</h1></Card.Title>
                    </Card.Body>
                </Card>
                <Card className=" bags">
                    <Card.Body>
                        <Card.Title className="cardHomeTitle"><h1>BAGS</h1></Card.Title>
                    </Card.Body>
                </Card>
            </CardColumns>
        )
    }

}
export default CardMenu