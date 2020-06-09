import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

function TableWithSizeAndQuantity(props){
    return(
        <div>
        {props.sizeAndQuantity.length !== 0 ?
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Size</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                {props.sizeAndQuantity.map(item => {
                    return (
                        <tbody>
                            <tr>
                                <td>{item.size}</td>
                                <td>{item.quantity}</td>
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
export default TableWithSizeAndQuantity