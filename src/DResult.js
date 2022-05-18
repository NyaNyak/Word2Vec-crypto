import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./Contexts/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
const Exit = styled.button`
  color: black;
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 4vh;
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

const Text = styled.textarea`
  margin-top: 4vh;
  width: 70%;
  height: 40%;
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
    height: 40%;
  }
`;

function DResult() {
  const context = useContext(UserContext);
  const { text, setText } = context;
  const { text2, setText2 } = context;
  const { output, setOutput } = context;
  const { id, setId } = context;
  /*
  useEffect(() => {
    axios({
      headers: {
        "Content-Type": `application/json`,
      },
      url: "http://127.0.0.1:5002/decrypt",
      method: "post",
      data: {
        id: id,
        de: text2,
      },
      proxy: {
        host: "http://127.0.0.1:5002",
        port: 443,
      },
    }).then(function (response) {
      setOutput(response.data.string);
      console.log(response);
    });
  }, []);
*/
  const onClick = () => {
    window.location.replace("/");
  };
  return (
    <Container>
      <Wrapper>
        <Top>
          <Icon>🔓︎</Icon>
          <Exit onClick={onClick}>←</Exit>
        </Top>

        <Title>Result</Title>
        <Text value={output} readonly />
      </Wrapper>
    </Container>
  );
}

export default DResult;
