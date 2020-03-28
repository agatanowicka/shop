import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import clothes from "../../clothes";

class Image extends Component {
    render() {
        let { images } = clothes[0];
        return (
            <Carousel >
                {images.map(item => {
                    return (
                        <Carousel.Item key={item}>
                            <img
                                className="d-block w-100 productImage"
                                src={item}
                                alt="product-image"
                            />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        );
    }

}
export default Image