import styled from "styled-components";
import { useEffect, useState } from "react";
import "./fonts/font.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-top: 17vh;
  width: 40vw;
  height: 60vh;
  text-align: center;
  background-color: rgb(41, 60, 44, 0.8);
  border: 3px solid red;
  @media screen and (max-width: 900px) {
    width: 65vw;
    height: 60vh;
    margin-bottom: 3vh;
    margin-top: 17vh;
  }
`;

const Top = styled.div`
  width: 40vw;
  height: 6vh;
  display: flex;
  justify-content: space-between;
  background-color: red;
  @media screen and (max-width: 900px) {
    width: 65vw;
    height: 6vh;
  }
`;

const Title = styled.div`
  letter-spacing: 2px;
  font-size: 25pt;
  color: red;
  font-family: "Goldman";
  margin-top: 4vh;
`;
const Exit = styled.div`
  color: white;
  font-size: 30px;
  margin-right: 15px;
  text-align: right;
`;
const Icon = styled.span`
  color: white;
  font-size: 30px;
  margin-left: 15px;
  text-align: left;
`;

function EResult() {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Icon>🔒︎</Icon>
          <Exit>x</Exit>
        </Top>

        <Title>Result</Title>
      </Wrapper>
    </Container>
  );
}

export default EResult;