import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./Contexts/Context";
import { useNavigate } from "react-router-dom";
import "./fonts/font.css";
import axios from "axios";

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
const Exit = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 4vh;
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

const Text = styled.textarea`
  margin-top: 4vh;
  width: 70%;
  height: 35%;
  overflow: visible;
  text-overflow: ellipsis;
  resize: none;
  border: none;
  outline: none;
  font-family: "Goldman";
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 20px 20px 20px 20px;
  @media screen and (max-width: 900px) {
    width: 70%;
    height: 35%;
  }
`;
const ID = styled.input`
  margin-top: 2vh;
  width: 70%;
  height: 3%;
  overflow: visible;
  text-overflow: ellipsis;
  resize: none;
  border: none;
  outline: none;
  font-family: "Goldman";
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 20px 20px 20px 20px;
  @media screen and (max-width: 900px) {
    width: 70%;
    height: 3%;
  }
`;

function EResult() {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { text, setText } = context;
  const { output, setOutput } = context;
  const { id, setId } = context;

  useEffect(() => {
    axios({
      headers: {
        "Content-Type": `application/json`,
      },
      url: "http://127.0.0.1:5002/encrypt",
      method: "post",
      data: {
        text: text,
      },
      proxy: {
        host: "http://127.0.0.1:5002",
        port: 443,
      },
    }).then(function (response) {
      setOutput(response.data.string);
      setId(response.data.id);
      console.log(response);
    });
  }, []);

  const onClick = () => {
    window.location.replace("/");
  };
  return (
    <Container>
      <Wrapper>
        <Top>
          <Icon>🔒︎</Icon>
          <Exit onClick={onClick}>←</Exit>
        </Top>

        <Title>Result</Title>
        <ID value={id} readonly />
        <Text value={output} readonly />
      </Wrapper>
    </Container>
  );
}

export default EResult;
