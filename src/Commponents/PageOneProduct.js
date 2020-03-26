import React from "react";
import clothes from "../clothes";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from "./Image";
import NameAndPrice from "./NameaAndPrice";
import ChooseSizeButton from "./ChooseSizeButton";
import AddToCardButton from "./AddToCardButton";
import Details from "./Details";
 import Foto from "./Foto";
import Parcel from "./Parcel";

function PageOneProduct() {
    return (
        <div>
            <Container className="imageAndBasicInfo">
                <Row>
                    <Col lg>
                        <Image image={clothes.image} />
                    </Col>
                    <Col lg className="basicInfo">
                        <NameAndPrice name={clothes.name} price={clothes.price} />
                        <ChooseSizeButton />
                        <AddToCardButton />
                        <Parcel />
                    </Col>
                </Row>
            </Container>
            <Container className="detailsContainer">
                <Row>
                    <Col lg>
                        <Details details={clothes.details} />
                    </Col>
                    <Col lg>
                        <Foto />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default PageOneProduct;