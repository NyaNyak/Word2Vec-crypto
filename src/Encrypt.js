import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Contexts/Context";
import { Link } from "react-router-dom";
import axios from "axios";
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

axios.defaults.withCredentials = true;

function Encrypt() {
  const navigate = useNavigate();
  const kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  const invalid = /[0-9!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]/g;
  //const [data, setData] = useState([{}]);
  const context = useContext(UserContext);
  const { text, setText } = context;
  const { output, setOutput } = context;
  const { id, setId } = context;

  const onClick = (event) => {
    let port = process.env.SERVER_PORT;
    try {
      event.preventDefault();
      if (text == "") {
        window.alert("텍스트를 입력하세요.");
      } else if (kor.test(text)) {
        window.alert("영문으로 입력해주세요.");
        setOutput("");
      } else {
        setOutput("loading...");
        axios({
          headers: {
            "Content-Type": `application/json`,
          },
          url: `http://127.0.0.1:${port}/encrypt`,
          method: "post",
          data: {
            text: text,
          },
          proxy: {
            host: `http://127.0.0.1:${port}`,
            port: 443,
          },
        }).then(function (response) {
          setOutput(response.data.string);
          setId(response.data.id);
          console.log(response);
        });
        navigate("/encrypted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onContentChange = (event) => {
    setText(event.currentTarget.value);
  };
  console.log(text);
  console.log(output);
  console.log(kor.test(text));

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
      <Form
        /*action="http://localhost:5002/encrypt"
        method="post"
        target="param"*/
        onSubmit={onClick}
      >
        <Text
          color="green"
          placeholder="INPUT TEXT"
          name="en"
          value={text}
          onChange={onContentChange}
        />

        <Button type="submit">ACCESS</Button>
      </Form>
    </Container>
  );
}

export default Encrypt;
