import React from 'react';
import { Container, InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {FormControl} from 'react-bootstrap'; 
function Header(props) {
  let input;
  if(props.answer_type === 'text'){
    input = <InputGroup><FormControl as="textarea" aria-label="With textarea" /></InputGroup>
  }
  else{
    input = <InputGroup.Checkbox aria-label="Checkbox for following text input" />
  }  
  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Question {props.question_id}</Form.Label>
          <Form.Control value = {props.question}  />
        </Form.Group>
      </Form>
      {input}
    </Container>
  );
}
export default Header;