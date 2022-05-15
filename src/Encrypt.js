import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Contexts/Context";
import { Link } from "react-router-dom";
import "./fonts/font.css";

const Container = styled.div`
  width: 40vw;
  height: 60vh;
  text-align: center;
  background-color: rgb(41, 60, 44, 0.8);
  border: 3px solid red;
  @media screen and (max-width: 900px) {
    width: 65vw;
    height: 60vh;
    margin-bottom: 3vh;
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
  font-size: 25px;
  margin-right: 15px;
  text-align: right;
`;
const Icon = styled.span`
  color: white;
  font-size: 25px;
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

const Button = styled.button`
  margin-top: 3vh;
  width: 25vw;
  height: 6vh;
  background-color: black;
  border: 3px solid red;
  font-size: 20pt;
  color: red;
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

const Form = styled.form`
  height: 55vh;
`;
function Encrypt() {
  const navigate = useNavigate();

  //const [data, setData] = useState([{}]);
  const context = useContext(UserContext);
  const { text, setText } = context;

  const onClick = () => {
    if ({ text } == "") {
      window.alert("텍스트를 입력하세요.");
    } else {
      navigate("/encrypted");
    }
  };

  const onContentChange = (event) => {
    setText(event.currentTarget.value);
  };
  console.log(text);
  /*
  useEffect(() => {
    fetch("http://localhost:5002/encrypt", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  */
  return (
    <Container>
      <Top>
        <Icon>🔒︎</Icon>
        <Exit>x</Exit>
      </Top>

      <Title>ENCRYPT</Title>

      <Text
        color="green"
        placeholder="INPUT TEXT"
        name="en"
        value={text}
        onChange={onContentChange}
      />

      <Button onClick={onClick}>ACCESS</Button>
    </Container>
  );
}

export default Encrypt;
