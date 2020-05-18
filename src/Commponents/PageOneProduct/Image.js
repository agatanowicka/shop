import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

function  Image(props){

        return (
            <Carousel >
               { props.images.map(item => {
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
export default Image