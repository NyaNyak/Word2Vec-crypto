import styled from "styled-components";
import "./fonts/font.css";

const Container = styled.div`
  color: white;
  width: 40vw;
  height: 70vh;
  text-align: center;
  background-color: rgb(51, 55, 54, 0.9);
  border: 3px solid yellow;
  @media screen and (max-width: 900px) {
    width: 65vw;
    height: 55vh;
  }
`;
const Top = styled.div`
  width: 40vw;
  height: 40px;
  display: flex;
  justify-content: space-between;
  background-color: yellow;
  @media screen and (max-width: 900px) {
    width: 65vw;
    height: 40px;
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
  margin-top: 30px;
`;

const Button = styled.button`
  margin-top: 20px;
  width: 300px;
  height: 50px;
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
    margin-top: 25px;
    width: 250px;
    height: 40px;
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
  margin-top: 30px;
  width: 70%;
  height: 40%;
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

function Decrpyt() {
  return (
    <Container>
      <Top>
        <Icon>🔓︎</Icon>
        <Exit>x</Exit>
      </Top>
      <Title>DECRYPT</Title>
      <form action="http://localhost:5002/decrypt" method="post" target="param">
        <Id placeholder="INPUT ID" name="id" />
        <Text placeholder="INPUT TEXT" name="de" />
        <Button type="submit">ACCESS</Button>
      </form>
    </Container>
  );
}

export default Decrpyt;
