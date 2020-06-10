import React from 'react';
import Table from 'react-bootstrap/Table';

function SizeTable(props) {
    const tableHeadData = ['', 'S', 'M', 'L', 'XL', 'XXL'];

    return (
        <Table striped bordered hover variant="light" size='sm'>
            <thead>
                <tr>
                    {tableHeadData.map((tableHeadItem, index) => {
                        return <th key={index}>{tableHeadItem}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {props.bodyData.map(bodyTable => {
                    return (
                        <tr id={bodyTable.id} key={bodyTable.index}>
                            {bodyTable.td.map((tableBodyItem, index) => {
                                return (
                                    <td key={index}>{tableBodyItem}</td>
                                )
                            })}
                        </tr>
                    )
                })
                }
            </tbody>
        </Table>
    )
}

export default SizeTable