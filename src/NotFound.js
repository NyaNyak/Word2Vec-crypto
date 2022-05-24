import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  margin-top: 25%;
  font-size: 35px;
  letter-spacing: 5px;
  color: #707070;
`;

const Button = styled.button`
  margin-top: 30px;
  width: 150px;
  height: 50px;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #abc594;
  color: white;
`;

function NotFound() {
  return (
    <Container>
      <Text>Page Not Found</Text>
      <Link to="/">
        <Button>Back to Game</Button>
      </Link>
    </Container>
  );
}

export default NotFound;
