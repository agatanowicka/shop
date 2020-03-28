import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

function Cards(props) {
    
    return (
        <Card style={{ width: '18rem' }}className="allCard">
            <Card.Img variant="top" src={props.image} />
            <Card.Body >
                    <Card.Title className="cardTitle">{props.name.toUpperCase()}</Card.Title>
                <Card.Text>
                    {props.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default Cards;