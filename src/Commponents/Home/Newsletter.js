import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Newsletter() {
    return (
        <div className="newsletterDiv">
            <Container fluid className='newsletterContainer'>
                <Row>
                    <Col md={5} className="newletterHeading">
                        <h3>Subscribe to the newsletter</h3>
                        <h5>Stay with us on a regular basis</h5>
                    </Col>
                    <Col md={7} >
                        <img
                            src='images/bag.jpg'
                            width='90%'
                            className='bagImage'
                            alt='newsletter'>
                        </img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Newsletter