import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function Images(props) {
    return (
        <Form.Group>
            <Container>
                <Row>
                    {props.images.map(item => {
                        return (<Col md={1}>
                            <Image src={item} rounded style={{ width: '50px', height: '60px' }} />
                        </Col>)
                    })}
                </Row>
            </Container>
            <Form.Label>Image</Form.Label>
            <Container style={{ width: '100%' }}>
                <Row >
                    <Col sm={8} style={{ padding: '0px' }}>
                        <Form.Control
                            type="text"
                            placeholder="Image"
                            onChange={props.imageChangeHandler}
                            value={props.image}
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col sm={4} style={{ paddingRight: '0px' }} >
                        <Button onClick={props.addImage}
                            style={{ width: '100%', backgroundColor: '#E7B2A5', borderColor: 'rgb(240, 130, 198)', borderWidth: '2px' }}
                            variant="primary" >
                            Add image
                            </Button>
                    </Col>
                </Row>
            </Container>
        </Form.Group>)
}
export default Images