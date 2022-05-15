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
  background-color: rgb(51, 55, 54, 0.9);
  border: 3px solid yellow;
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
  background-color: yellow;
  @media screen and (max-width: 900px) {
    width: 65vw;
    height: 6vh;
  }
`;

const Title = styled.div`
  letter-spacing: 2px;
  font-size: 25pt;
  color: yellow;
  font-family: "Goldman";
  margin-top: 4vh;
`;
const Exit = styled.div`
  color: black;
  font-size: 30px;
  margin-right: 15px;
  text-align: right;
`;
const Icon = styled.span`
  color: black;
  font-size: 30px;
  margin-left: 15px;
  text-align: left;
`;

function DResult() {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Icon>🔓︎</Icon>
          <Exit>x</Exit>
        </Top>

        <Title>Result</Title>
      </Wrapper>
    </Container>
  );
}

export default DResult;
