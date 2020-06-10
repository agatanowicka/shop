import React from "react";
import Card from 'react-bootstrap/Card';

function Cards(props) {
    return (
        <a href={"/product/" + props.productId} className="card-link">
            <Card style={{ width: '18rem' }} className="allCard">
                <Card.Img className='imageInCollection' variant="top" src={props.image} />
                <Card.Body >
                    <Card.Title className="cardTitle">{props.name.toUpperCase()}</Card.Title>
                    <Card.Text className='cardPrice'>
                        {props.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
    )
}
export default Cards;