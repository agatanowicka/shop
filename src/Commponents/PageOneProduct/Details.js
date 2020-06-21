import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import table1BodyData from './table1BodyData';
import table2BodyData from './table2BodyData';
import SizeTable from './SizeTable';

class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    getDetails = () => {
        const text = '';
        this.setState({
            text
        })
    }
    render() {
        return (
            <div className='divWithSizeAndDetails '>
                <Tabs defaultActiveKey="details" transition={false} id="noanim-tab-example" variant='tabs' className='tabsWithSizeAndDetails'>
                    <Tab eventKey="details" title="Details">
                        <Container fluid className='tabsContent'>
                            <Row>
                                <Col >
                                    <div className='detailsItem'><h5 className='detailsItemHeading'>Details:</h5> <h6 className='detailsItemText'> {this.props.details}</h6></div>
                                    <div className='detailsItem'>  <h5 className='detailsItemHeading'>Fabric:</h5> <h6 className='detailsItemText'>{this.props.fabric}</h6> </div>
                                    <div className='detailsItem'> <h5 className='detailsItemHeading'>Type of material:</h5> <h6 className='detailsItemText'>{this.props.typeOfMaterial}</h6> </div>
                                    <div className='detailsItem'> <h5 className='detailsItemHeading'>Care tips:</h5> <h6 className='detailsItemText'> {this.props.careTips}</h6> </div>
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="size" title="Size" >
                        <Container fluid className='tabsContent'>
                            <Row>
                                <Col>
                                    <SizeTable bodyData={table1BodyData} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={3} sm={3}><img src='/images/size.jpg' width='100%' height='90%' alt='Size'></img></Col>
                                <Col xs={9} sm={9}>
                                    <SizeTable bodyData={table2BodyData} />
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default Details