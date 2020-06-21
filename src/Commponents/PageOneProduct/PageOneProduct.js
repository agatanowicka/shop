import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from "../PageOneProduct/Image";
import NameAndPrice from "../PageOneProduct/NameaAndPrice";
import ChooseSizeAndAddToBusket from "../PageOneProduct/ChooseSizeAndAddToBusket";
import Details from "../PageOneProduct/Details";
import Foto from "../PageOneProduct/Foto";
import Parcel from "../PageOneProduct/Parcel";
import backendLink from "../../backendLink";


class PageOneProduct extends Component {

    constructor(props) {
        super(props);
        this.getDataAboutProduct();
        this.state = {
            images: [],
            name: "",
            price: "",
            details: "",
            fabric: '',
            typeOfMaterial: '',
            careTips: '',
            sizes: [],
            product_Id: ''
        };
    }
    getDataAboutProduct() {
        debugger
        const productId = this.props.match.params.id;
        fetch(backendLink + `/collection/product/${ productId}`, { method: 'GET' })
            .then(res => {
                if (res.status !== 200) {
                    return alert('Failed to fetch status')
                }
                return res.json();
            })
            .then(resData => {
                const sizes = resData.sizeAndQuantity
                    .map(obj => obj.size)
                this.setState({
                    images: resData.images,
                    name: resData.name,
                    price: resData.price,
                    details: resData.details,
                    fabric: resData.fabric,
                    typeOfMaterial: resData.typeOfMaterial,
                    careTips: resData.careTips,
                    sizes: sizes,
                    product_Id:resData._id
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
                            <Image
                                images={this.state.images}
                            />
                        </Col>
                        <Col lg className="basicInfo">
                            <NameAndPrice
                                name={this.state.name}
                                price={this.state.price}
                            />
                            <ChooseSizeAndAddToBusket
                                sizes={this.state.sizes}
                                name={this.state.name}
                                price={this.state.price}
                                productId={this.state.product_Id}
                                images={this.state.images}
                            />
                            <Parcel />
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="detailsContainer">
                    <Row >
                        <Col xs={12} s={12} md={6} lg={6}>
                            <Details
                                details={this.state.details}
                                fabric={this.state.fabric}
                                typeOfMaterial={this.state.typeOfMaterial}
                                careTips={this.state.careTips}
                            />
                        </Col>
                        <Col  xs={12} s={12} md={6} lg={6}  >
                            <Foto />
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}
export default PageOneProduct;