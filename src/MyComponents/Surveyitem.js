import React from 'react';
import { Container} from 'react-bootstrap';
import Answertype from "./Answertype";
import Question from "./Question";

function Header(props) {  
  return (
    <Container>
      <Question question_id={props.key} question={props.questionData.email}/>
      <Answertype answer_type = 'text'/>
    </Container>
  );
}
export default Header;