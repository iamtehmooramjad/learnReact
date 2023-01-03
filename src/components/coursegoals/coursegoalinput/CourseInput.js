import React, {useState} from 'react';

import './CourseInput.css';
import Button from "../../ui/Button";
import styled from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.valid ? 'black' : 'red'};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.valid ? '#ccc' : 'red'};
    background: ${props => props.valid ? 'transparent' : '#ffd7d7'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

`;

const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [valid, setValid] = useState(true);

    const goalInputChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
            setValid(true)
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setValid(false)
            return;
        }
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <FormControl valid={valid}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler}/>
            </FormControl>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
