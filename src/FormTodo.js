
import {Button, Card, Form} from 'react-bootstrap';
import React from 'react';

function FormTodo({ addTodo }){
    const [value, setValue] = React.useState("");

    const handleSubmit = e =>{
        e.preventDefault();
        if(!value) return;
        addTodo(value)
        setValue("");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label><b>Add Todo</b></Form.Label>
                <Form.Control type="text" className="input" value={value} onChange={
                    e=> setValue(e.target.value)
                }
                placeholder="Ajouter un nouveau todo"
                />
            </Form.Group>
            <br/>
            <Button variant="primary mb-3" type="submit">
                Submit
            </Button>
        </Form>
    )
}
export default FormTodo;