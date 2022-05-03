import styled from "styled-components";
import { Link } from "react-router-dom";
import Encrypt from "./Encrypt";
import Decrpyt from "./Decrypt";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  align-items: center;
  width: 90vw;
  height: 100vh;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-content: space-between;
    margin-top: 40px;
    margin-bottom: 40px;
    height: 100%;
  }
`;

function Main() {
  return (
    <Container>
      <Encrypt />
      <Decrpyt />
    </Container>
  );
}

export default Main;
