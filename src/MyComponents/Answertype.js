import React from "react";
import {InputGroup, FormControl } from 'react-bootstrap';

function Answertype(props) {
    let input;
    if(props.answer_type === 'text'){
    input = <InputGroup ><FormControl as="textarea" aria-label="With textarea" /></InputGroup>
    }
    else{
    input = <InputGroup.Checkbox size="lg" aria-label="Checkbox for following text input" />
    }  
    return (
        <div>
            {input}
        </div>
    );
}
export default Answertype;