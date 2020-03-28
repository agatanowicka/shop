import React from "react";
import clothes from "../../clothes";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card"

function Catalog() {
    return (
        <div>
            <Container>
                <Row>
                    {clothes.map(item=>{
                        return(
                     <Col xs={12} md={4}>
                        <Card name={item.name} image={item.images} price={item.price} />
                    </Col>)})
}
                </Row>
            </Container>
        </div>
    )
}

export default Catalog;