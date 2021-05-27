import React from 'react';
import { Container} from 'react-bootstrap';
import Answertype from "./Answertype";
import Question from "./Question";

function Header(props) {  
  return (
    <Container>
      <Question question_id={props.question_id} question={props.question}/>
      <Answertype answer_type = {props.answer_type}/>
    </Container>
  );
}
export default Header;