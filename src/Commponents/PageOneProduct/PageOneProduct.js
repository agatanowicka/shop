import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from "../PageOneProduct/Image";
import NameAndPrice from "../PageOneProduct/NameaAndPrice";
import ChooseSizeButton from "../PageOneProduct/ChooseSizeButton";
import AddToCardButton from "../PageOneProduct/AddToCardButton";
import Details from "../PageOneProduct/Details";
import Foto from "../PageOneProduct/Foto";
import Parcel from "../PageOneProduct/Parcel";

class PageOneProduct extends Component {
    
    constructor(props) {
        super(props);
        this.getDataAboutProduct();
        this.state = {
            images: [],
            name: "",
            price: "",
            details: "",
            sizes: []
        };
    }
        debugger;
    getDataAboutProduct() {
        const productId = this.props.match.params.id;
        debugger;
        fetch('http://localhost:8080/colection/product/' + productId, { method: 'GET' })
            .then(res => {
                if (res.status !== 200) {
                    return alert('Failed to fetch status')
                }
                return res.json();
            })
            .then(resData => {
                const sizes = resData.sizeAndQuantity
                .filter(obj => obj.quanity > 0)
                .map(obj => obj.size);
                debugger;
                this.setState({
                    images: resData.images,
                    name: resData.name,
                    price: resData.price,
                    details: resData.details,
                    sizes: sizes
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <div>
                <Container className="imageAndBasicInfo">
                    <Row>
                        <Col lg>
                            <Image images={this.state.images} />
                        </Col>
                        <Col lg className="basicInfo">
                            <NameAndPrice name={this.state.name} price={this.state.price} />
                            <ChooseSizeButton sizes={this.state.sizes}/>
                            <AddToCardButton />
                            <Parcel />
                        </Col>
                    </Row>
                </Container>
                <Container className="detailsContainer">
                    <Row>
                        <Col lg>
                            <Details details={this.state.details} />
                        </Col>
                        <Col lg>
                            <Foto />
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}
export default PageOneProduct;