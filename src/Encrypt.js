import styled from "styled-components";
import "./fonts/font.css";

const Container = styled.div`
  width: 40vw;
  height: 58vh;
  text-align: center;
  background-color: rgb(41, 60, 44, 0.8);
  border: 3px solid red;
  @media screen and (max-width: 900px) {
    width: 65vw;
    height: 55vh;
    margin-bottom: 20px;
  }
`;

const Top = styled.div`
  width: 40vw;
  height: 40px;
  background-color: red;
  @media screen and (max-width: 900px) {
    width: 65vw;
    height: 40px;
  }
`;

const Title = styled.div`
  letter-spacing: 2px;
  font-size: 25pt;
  color: red;
  font-family: "Goldman";
  margin-top: 30px;
`;
const Exit = styled.div`
  color: white;
  font-size: 25px;
  margin-right: 15px;
  text-align: right;
`;

const Text = styled.textarea`
  margin-top: 30px;
  width: 70%;
  height: 45%;
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
  margin-top: 35px;
  width: 300px;
  height: 50px;
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
    margin-top: 25px;
    width: 250px;
    height: 40px;
  }
`;

function Encrypt() {
  return (
    <Container>
      <Top>
        <Exit>x</Exit>
      </Top>

      <Title>ENCRYPT</Title>
      <Text color="green" placeholder="INPUT TEXT" />
      <Button>ACCESS</Button>
    </Container>
  );
}

export default Encrypt;
