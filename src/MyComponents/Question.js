import React from 'react'
import { Form} from 'react-bootstrap';

function Question(props) {
    return (
    <div>
        <Form className="pt-3 ">
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Question {props.question_id}</Form.Label>
            <Form.Control value = {props.question}  readOnly/>
            </Form.Group>
        </Form>
    </div>
    );
}
export default Question;