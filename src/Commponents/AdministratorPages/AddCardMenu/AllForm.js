import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Input from '../../Input';

function AllForm(props) {
    return (
        <Form className='cardMenuForm' onSubmit={props.onSubmit} >
            <Input
                type={'text'}
                label={"Image"}
                onChange={(e) => props.changeHandler("image", e.target.value)}
                value={props.state.cardMenuForm.image.value}
                isValid={props.state.cardMenuForm.image.valid}
            />
         <Input
                type={'text'}
                label={'Title'}
                onChange={(e) => props.changeHandler("title", e.target.value)}
                value={props.state.cardMenuForm.title.value}
                isValid={props.state.cardMenuForm.title.valid}
            />
             <Input
                type={'text'}
                label={'Type'}
                onChange={(e) => props.changeHandler("type", e.target.value)}
                value={props.state.cardMenuForm.type.value}
                isValid={props.state.cardMenuForm.type.valid}
            />
            <Button 
            onClick={props.checkAllForm} 
            className="cardMenuFormButton" 
            variant="dark" type="submit">
                Create new card
                </Button>
            <Form.Label>{props.state.messageFromBackend}</Form.Label>
        </Form>
    )
}
export default AllForm
