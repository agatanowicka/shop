import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { AiFillDelete } from "react-icons/ai";

function Images(props) {
    const [image, setImage] = useState('');
    const [images, setImages] = useState([]);
    useEffect(() => {
        setImages(props.images);
    }, [props.images])

    function addImage() {
        if (image !== '') {
            images.push(image);
            setImages(images);
            setImage('');
            props.imagesChangeCallback(images);
        }
    }
    function deleteImage(e, item) {
        e.preventDefault();
        const filteredImages = images.filter((img) => img !== item)
        setImages(filteredImages);
        props.imagesChangeCallback(filteredImages);
    }
    return (
        <Form.Group>
            <Container>
                <Row>
                    {images.map((item, index) => {
                        return (<Col md={1} key={index}>
                            <Button variant="dark" className='deleteImageBtn' onClick={(e) => deleteImage(e, item)}><AiFillDelete /></Button>
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
                            onChange={(event) => setImage(event.target.value)}
                            value={image}
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col sm={4} style={{ padding: '0px' }} >
                        <Button onClick={() => addImage()}
                            className='addImgProductBtn'
                            variant="dark" >
                            Add image
                            </Button>
                    </Col>
                </Row>
            </Container>
        </Form.Group>)
}
export default Images