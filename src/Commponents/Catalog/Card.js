import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { AiFillDelete } from "react-icons/ai";

function Cards(props) {
    const isAuth = localStorage.getItem('isAuth');
    const isAministrator = localStorage.getItem('isAdministrator')
    return (
        <Card style={{ width: '18rem' }} className="allCard">
            <Card.Link href={"/product/" + props.productId} className="card-link">
                <Card.Img className='imageInCollection' variant="top" src={props.image} />
                <Card.Body >
                    <Card.Title className="cardTitle">{props.name.toUpperCase()}</Card.Title>
                    <Card.Text className='cardPrice'>
                        {props.price}
                    </Card.Text>
                </Card.Body>
            </Card.Link>
            {isAuth && isAministrator ?
                <div className='cardMenuButtons'><Button variant="dark" >Edit</Button> <Button variant="dark" onClick={(e)=>props.deleteCard(e)}><AiFillDelete /></Button></div>
                : ''}
        </Card>

    )
}

export default Cards;