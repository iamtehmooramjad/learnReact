import React, {useState} from 'react';
import Card from "../ui/Card";
import styled from "styled-components";
import Button from "../ui/Button";

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  font: inherit;
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  padding: 0.15rem;
  margin-bottom: 0.5rem;

  &:focus {
    outline: none;
    border-color: #4f005f;
  }
`;


const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const cardStyle = {
        margin: "2rem auto",
        padding: "1rem",
        width: "90%",
        maxWidth: "40rem"
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }


    const addUserHandler = (event) => {
        event.preventDefault()
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        } else if (+enteredAge < 1) {
            return;
        }
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }

    return (
        <Card style={cardStyle}>
            <form onSubmit={addUserHandler}>
                <Label htmlFor={'username'}>Username</Label>
                <Input type="text" id={'username'} onChange={usernameChangeHandler} value={enteredUsername}/>

                <Label htmlFor={'age'}>Age (Years)</Label>
                <Input type="number" id={'age'} onChange={ageChangeHandler} value={enteredAge}/>

                <Button type={'submit'}>Add User</Button>
            </form>
        </Card>

    );
};

export default AddUser;
