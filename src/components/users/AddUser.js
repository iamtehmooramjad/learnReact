import React, {useRef, useState} from 'react';
import Card from "../ui/Card";
import styled from "styled-components";
import Button from "../ui/Button";
import ErrorModal from "../ui/ErrorModal";
import Wrapper from "../helpers/Wrapper";

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
    const nameInputRef = useRef('');
    const ageInputRef = useRef('');
    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();


    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value)
    // }
    //
    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value)
    // }



    const cardStyle = {
        margin: "2rem auto",
        padding: "1rem",
        width: "90%",
        maxWidth: "40rem"
    }


    const addUserHandler = (event) => {
        event.preventDefault()

        const name = nameInputRef.current.value
        const age = ageInputRef.current.value
        if (name.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid name or age'
            });
            return;
        } else if (+age < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter valid age'
            });
            return;
        }
        props.onAddUser(name, age)
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        // setEnteredUsername('')
        // setEnteredAge('')
    }

    const errorHandler = () => {
        setError(null)
    }
    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card style={cardStyle}>
                <form onSubmit={addUserHandler}>
                    <Label htmlFor={'username'}>Username</Label>
                    <Input
                        type="text"
                        id={'username'}
                        // onChange={usernameChangeHandler} value={enteredUsername}
                        ref={nameInputRef}
                    />

                    <Label htmlFor={'age'}>Age (Years)</Label>
                    <Input
                        type="number"
                        id={'age'}
                        // onChange={ageChangeHandler} value={enteredAge}
                        ref={ageInputRef}
                    />

                    <Button type={'submit'}>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;
