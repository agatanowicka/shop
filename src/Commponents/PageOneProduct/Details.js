import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
            <div className='divWithSizeAndDetails'>
                <Tabs defaultActiveKey="details" transition={false} id="noanim-tab-example" variant='tabs' className='tabsWithSizeAndDetails'>
                    <Tab eventKey="details" title="Details">
                        <div className='tabsContent'>
                            <div className='detailsItem'><h5 className='detailsItemHeading'>Details:</h5> <h6 className='detailsItemText'> {this.props.details}</h6></div>
                            <div className='detailsItem'>  <h5 className='detailsItemHeading'>Fabric:</h5> <h6 className='detailsItemText'>{this.props.fabric}</h6> </div>
                            <div className='detailsItem'> <h5 className='detailsItemHeading'>Type of material:</h5> <h6 className='detailsItemText'>{this.props.typeOfMaterial}</h6> </div>
                            <div className='detailsItem'> <h5 className='detailsItemHeading'>Care tips:</h5> <h6 className='detailsItemText'> {this.props.careTips}</h6> </div>
                        </div>
                    </Tab>
                    <Tab eventKey="size" title="Size" >
                        <div className='tabsContent'>
                            <Table striped bordered hover variant="light" size='sm'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>S</th>
                                        <th>M</th>
                                        <th>L</th>
                                        <th>XL</th>
                                        <th>XXL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr id="tableTr">
                                        <td>USA</td>
                                        <td>4-6</td>
                                        <td>8-10</td>
                                        <td>12-14</td>
                                        <td>14-16</td>
                                        <td>16-18</td>
                                    </tr>
                                    <tr id='table_tr'>
                                        <td>UK</td>
                                        <td>6-8</td>
                                        <td>10-12</td>
                                        <td>14-16</td>
                                        <td>16-18</td>
                                        <td>18-20</td>
                                    </tr>
                                    <tr id="tableTr">
                                        <td>FR</td>
                                        <td >34-36</td>
                                        <td>38-40</td>
                                        <td >42-44</td>
                                        <td>44-46</td>
                                        <td>46-50</td>
                                    </tr>
                                    <tr id='table_tr'>
                                        <td>D</td>
                                        <td >32-34</td>
                                        <td>36-38</td>
                                        <td >40-42</td>
                                        <td>42-44</td>
                                        <td>44-46</td>
                                    </tr>
                                    <tr id="tableTr">
                                        <td>IT</td>
                                        <td >38-40</td>
                                        <td>42-44</td>
                                        <td >46-48</td>
                                        <td>48-50</td>
                                        <td>50-52</td>
                                    </tr>
                                    <tr id='table_tr'>
                                        <td>Australia</td>
                                        <td >8-10</td>
                                        <td>12-14</td>
                                        <td >16-18</td>
                                        <td>18-20</td>
                                        <td>20-22</td>
                                    </tr>
                                    <tr id="tableTr">
                                        <td>JP</td>
                                        <td >7-9</td>
                                        <td>11-13</td>
                                        <td >15-17</td>
                                        <td>17-19</td>
                                        <td>19-21</td>
                                    </tr>

                                </tbody>
                            </Table>
                            <Container fluid style={{padding:'0px'}}>
                                <Row>
                                    <Col sm={3}><img src='/images/size.jpg' width='100%' height='90%'></img></Col>
                                    <Col> <Table striped bordered hover variant="light" size='sm'>
                                        <thead>
                                            <tr >
                                                <th></th>
                                                <th>S</th>
                                                <th>M</th>
                                                <th>L</th>
                                                <th>XL</th>
                                                <th>XXL</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr id="tableTr">
                                                <td>A</td>
                                                <td>82-90 cm</td>
                                                <td>90-98 cm</td>
                                                <td>98-107 cm</td>
                                                <td>107-119 cm</td>
                                                <td>119-131 cm</td>
                                            </tr>
                                            <tr id='table_tr'>
                                                <td>B</td>
                                                <td>63-72 cm</td>
                                                <td>73-82 cm</td>
                                                <td>83-92 cm</td>
                                                <td>93-102 cm</td>
                                                <td>103-112 cm</td>
                                            </tr>
                                            <tr id="tableTr">
                                                <td>C</td>
                                                <td >66-74 cm</td>
                                                <td>74-82 cm</td>
                                                <td >82-91 cm</td>
                                                <td>91-103 cm</td>
                                                <td>103-115 cm</td>
                                            </tr>
                                            <tr id='table_tr'>
                                                <td>D</td>
                                                <td >90-98 cm</td>
                                                <td>98-106 cm</td>
                                                <td >106-115 cm</td>
                                                <td>115-125 cm</td>
                                                <td>125-135 cm</td>
                                            </tr>
                                        </tbody>
                                    </Table></Col>
                                </Row>
                            </Container>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default Details