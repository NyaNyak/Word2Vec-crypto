import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Contexts/Context";
import axios from "axios";
import "./fonts/font.css";

const Container = styled.div`
  color: white;
  width: 40vw;
  height: 76vh;
  text-align: center;
  background-color: rgb(51, 55, 54, 0.9);
  border: 3px solid yellow;
  @media screen and (max-width: 900px) {
    width: 65vw;
    height: 65vh;
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
const Icon = styled.span`
  color: black;
  font-size: 25px;
  margin-left: 15px;
  text-align: left;
`;
const Exit = styled.div`
  color: black;
  font-size: 25px;
  margin-right: 15px;
  text-align: right;
`;
const Title = styled.div`
  letter-spacing: 2px;
  font-size: 25pt;
  color: yellow;
  font-family: "Goldman";
  margin-top: 4vh;
`;

const Button = styled.button`
  margin-top: 3vh;
  width: 25vw;
  height: 6vh;
  background-color: black;
  border: 3px solid yellow;
  font-size: 20pt;
  color: yellow;
  font-family: "Goldman";
  outline: none;
  cursor: pointer;
  &:active {
    background-color: #353535;
  }
  @media screen and (max-width: 900px) {
    margin-top: 3vh;
    width: 50vw;
    height: 6vh;
  }
`;
const Id = styled.input`
  margin-top: 30px;
  width: 70%;
  height: 5%;
  border: none;
  outline: none;
  background-color: black;
  color: white;
  font-family: "Goldman";
  font-size: 20px;
  padding: 20px 20px 20px 20px;
  @media screen and (max-width: 900px) {
    width: 70%;
    height: 3%;
  }
`;

const Text = styled.textarea`
  margin-top: 4vh;
  width: 70%;
  height: 35%;
  overflow: visible;
  text-overflow: ellipsis;
  font-family: "Goldman";
  resize: none;
  border: none;
  outline: none;
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 20px 20px 20px 20px;
  @media screen and (max-width: 900px) {
    width: 70%;
    height: 20%;
  }
`;

const Form = styled.form`
  height: 70vh;
`;

function Decrpyt() {
  const navigate = useNavigate();
  const kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  const invalid = /[0-9!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]/g;
  const num = /[0-9]/;
  const context = useContext(UserContext);
  const { text2, setText2 } = context;
  const { output, setOutput } = context;
  const { id, setId } = context;
  const { state, setState } = context;
  const onClick = (event) => {
    try {
      event.preventDefault();
      if (text2 == "" || id == "") {
        window.alert("Key 또는 텍스트를 입력하세요.");
      } else if (kor.test(text2)) {
        window.alert("텍스트는 영문으로 입력해주세요.");
        setOutput("");
        if (!num.test(id)) {
          window.alert("Key는 숫자로 입력해주세요.");
        }
      } else {
        axios({
          headers: {
            "Content-Type": `application/json`,
          },
          url: `http://127.0.0.1:5002/decrypt`,
          method: "post",
          data: {
            id: id,
            de: text2,
          },
          proxy: {
            host: `http://127.0.0.1:5002`,
            port: 443,
          },
        }).then(function (response) {
          if (response.data.status == 1) {
            setOutput(response.data.message);
          } else {
            setOutput(response.data.string);
            console.log(response);
          }
        });
        navigate("/decrypted");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onIdChange = (event) => {
    setId(event.currentTarget.value);
  };
  const onContentChange = (event) => {
    setText2(event.currentTarget.value);
  };
  return (
    <Container>
      <Top>
        <Icon>🔓︎</Icon>
        <Exit>x</Exit>
      </Top>
      <Title>DECRYPT</Title>
      <Form onSubmit={onClick}>
        <Id
          placeholder="INPUT KEY"
          value={id}
          name="id"
          onChange={onIdChange}
        />
        <Text
          placeholder="INPUT TEXT"
          value={text2}
          name="de"
          id="dec"
          onChange={onContentChange}
        />
        <Button type="submit">ACCESS</Button>
      </Form>
    </Container>
  );
}

export default Decrpyt;
