import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import sizeData from './sizeData';
import TableWithSizeAndQuantity from './TableWithSizeAndQuantity';
import Input from './Input';
import SelectInput from './SelectInput';
import Form from 'react-bootstrap/Form';

function SizeAndQuantity(props) {
    return (
        <div>
            <Container style={{ width: '100%' }}>
                <Row >
                    <Col sm={4} style={{ padding: '0px' }}>
                        <SelectInput
                            label={'Size'}
                            onClick={props.sizeChangeHandler}
                            onChange={props.sizeChangeHandler}
                            data={sizeData}
                            value={props.sizeValue}
                        />
                    </Col>
                    <Col sm={4} style={{ paddingRight: '0px' }} >
                        <Input
                            min={"0"}
                            type={"number"}
                            label={"Quantity"}
                            onChange={props.quantityChangeHandler}
                            value={props.quantityValue}
                        />
                    </Col>
                    <Col sm={4} style={{ marginTop: '30px', paddingRight: '0px' }} >
                        <Button onClick={props.addSizeAndQuantity} style={{ width: '100%', backgroundColor: '#E7B2A5', borderColor: 'rgb(240, 130, 198)', borderWidth: '2px' }} variant="primary" >Add size and quantity</Button>
                    </Col>
                </Row>
            </Container>
            <Form.Label className="validMessage">{props.sizeAndQuantityErrMessage}</Form.Label>
            <TableWithSizeAndQuantity sizeAndQuantity={props.sizeAndQuantity} />
        </div>
    )
}

export default SizeAndQuantity