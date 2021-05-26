import React from 'react';
import { Container, InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {FormControl} from 'react-bootstrap'; 
function Header(props) {
  let input;
  if(props.answer_type === 'text'){
    input = <InputGroup ><FormControl as="textarea" aria-label="With textarea" /></InputGroup>
  }
  else{
    input = <InputGroup.Checkbox size="lg" aria-label="Checkbox for following text input" />
  }  
  return (
    <Container>
      <Form className="pt-3 ">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Question {props.question_id}</Form.Label>
          <Form.Control value = {props.question}  readOnly/>
        </Form.Group>
      </Form>
      {input}
    </Container>
  );
}
export default Header;