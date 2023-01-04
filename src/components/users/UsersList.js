import React from 'react';
import Card from "../ui/Card";
import styled from "styled-components";


const List = styled.ul`
  list-style: none;
  padding: 1rem;
`;

const Item = styled.li`
  border: 1px solid #ccc;
  margin: 0.5rem 0;
  padding: 0.5rem;
`;

const UsersList = props => {

    const cardStyled = {
        margin: "2rem auto",
        width: "90%",
        maxWidth: "40rem"
    }
    return (
        <Card style={cardStyled}>
            <List>
                {props.users.map(user => <Item key={user.id}>{user.name} ({user.age} years old)</Item>)}
            </List>
        </Card>
    );
};

export default UsersList;
