import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const ProductCard = ({ product }) => (
    <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src={product.image} /> */}
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.size}</Card.Text>
            <Card.Text>{product.quantity}</Card.Text>
            <Card.Text>{product.price}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
)