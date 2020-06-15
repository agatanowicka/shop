import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import sizeData from './sizeData';
import Input from '../Input';
import SelectInput from './SelectInput';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { AiFillDelete } from "react-icons/ai";
import deleteCard from '../Catalog/deleteCard';

function SizeAndQuantity(props) {
    const [sizeAndQuantityErrMessage, setSizeAndQuantityErrMessage] = useState('');
    const [sizeAndQuantity, setSizeAndQuantity] = useState(props.sizeAndQuantity);
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState('');

    function addSizeAndQuantity() {
        if (size !== '' && quantity !== "") {
            let thisSizeExist = false;
            for (let i = 0; i < sizeAndQuantity.length; i++) {
                if (sizeAndQuantity[i].size === size) {
                    thisSizeExist = true;
                    setSizeAndQuantityErrMessage('This size has already been added');
                }
            }
            if (!thisSizeExist) {
                sizeAndQuantity.push({ size, quantity })
                setSizeAndQuantity(sizeAndQuantity)
                setQuantity('');
                setSizeAndQuantityErrMessage('');
                props.updateCallback(sizeAndQuantity);
            }
        } else {
            setSizeAndQuantityErrMessage('Size and quantty must be filled out');
        }
    }
    function deleteSizeAndQuantity( e,index) {
        e.preventDefault();
        sizeAndQuantity.splice(index,1)
        setSizeAndQuantity(sizeAndQuantity);
        const mappedSizeAndQuantity= sizeAndQuantity.map(item=>{return {size:item.size, quantity:item.quantity}})
        setSizeAndQuantity(mappedSizeAndQuantity);
        props.updateCallback(mappedSizeAndQuantity);;
    }

    return (
        <div>
            <Container style={{ width: '100%' }}>
                <Row >
                    <Col sm={4} style={{ padding: '0px' }}>
                        <SelectInput
                            label={'Size'}
                            onClick={(event) => setSize(event.target.value)}
                            onChange={(event) => setSize(event.target.value)}
                            data={sizeData}
                            value={size}
                        />
                    </Col>
                    <Col sm={4} style={{ paddingRight: '0px' }} >
                        <Input
                            min={"0"}
                            type={"number"}
                            label={"Quantity"}
                            onChange={(event) => setQuantity(Math.floor(event.target.value))}
                            value={quantity}
                        />
                    </Col>
                    <Col sm={4} style={{ marginTop: '30px', paddingRight: '0px' }} >
                        <Button
                            onClick={() => addSizeAndQuantity()}
                            style={{ width: '100%', backgroundColor: '#E7B2A5', borderColor: 'rgb(240, 130, 198)', borderWidth: '2px' }}
                            variant="primary"
                        >
                            Add size and quantity
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Form.Label className="validMessage">{sizeAndQuantityErrMessage}</Form.Label>
            {sizeAndQuantity.length !== 0 ?
                <Table striped bordered hover size="sm" className='sizeAndQuantityTable'>
                    <thead>
                        <tr>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    {sizeAndQuantity.map((item, index )=> {
                        return (
                            <tbody key={index}>
                                <tr>
                                    <td>{item.size}</td>
                                    <td>{item.quantity}</td>
                                    <td> <Button variant="dark" className='deleteTableBtn' onClick={(e) => deleteSizeAndQuantity(e,index)}><AiFillDelete /></Button></td>
                                </tr>
                            </tbody>

                        )
                    })}
                </Table>
                : ''
            }
            
        </div>
    )
}

export default SizeAndQuantity