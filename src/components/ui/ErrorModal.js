import React from 'react';
import styled from "styled-components";
import Card from "./Card";
import Button from "./Button";


const HeaderContainer = styled.header`
  background: #4f005f;
  padding: 1rem;
`;

const Header = styled.h2`
  margin: 0;
  color: white;
`;

const ContentContainer = styled.div`
  padding: 1rem;
`;

const Message = styled.p`

`;

const FooterContainer = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const ErrorModal = (props) => {
    const cardStyle = {
        position: "fixed",
        top: "30vh",
        left: "10%",
        width: "80%",
        zIndex: "100",
        overflow: "hidden"
    }
    return (
        <div>
            <Backdrop onClick={props.onConfirm}/>
            <Card style={cardStyle}>
                <HeaderContainer>
                    <Header>{props.title}</Header>
                </HeaderContainer>
                <ContentContainer>
                    <Message>{props.message}</Message>
                </ContentContainer>
                <FooterContainer>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </FooterContainer>
            </Card>
        </div>

    );
};

export default ErrorModal;
