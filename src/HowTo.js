import styled from "styled-components";
import React, { useEffect, useState, useRef } from "react";
import "./fonts/font.css";
import Modal from "./Modal";
import Guide from "./Guide";

const Container = styled.div`
  margin-bottom: 40px;
  width: 28vw;
  height: 10vh;
  text-align: center;
  background-color: rgb(41, 60, 44, 0.8);
  border: 3px solid red;
  @media screen and (max-width: 900px) {
    width: 45vw;
    height: 10vh;
    margin-bottom: 20px;
  }
`;

const Top = styled.div`
  width: 28vw;
  height: 35px;
  background-color: red;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    width: 45vw;
    height: 35px;
  }
`;

const Icon = styled.span`
  color: white;
  font-size: 22px;
  margin-left: 15px;
  text-align: left;
`;
const Exit = styled.span`
  color: white;
  font-size: 22px;
  margin-right: 15px;
  text-align: right;
`;

const Button = styled.button`
  margin-top: 5px;
  width: 300px;
  height: 50px;
  background-color: transparent;
  border: none;
  font-size: 20pt;
  color: red;
  font-family: "Goldman";
  outline: none;
  cursor: pointer;
  &:hover {
    color: yellow;
  }
  @media screen and (max-width: 900px) {
    margin-top: 10px;
    width: 250px;
    height: 40px;
  }
`;

const Box = styled.div``;

function HowTo() {
  const el = useRef();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCloseModal = (e) => {
    if (modalOpen && !el.current.contains(e.target)) setModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleCloseModal);
    console.log("click");
    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  }, []);
  return (
    <Container>
      <Top>
        <Icon>?</Icon>
        <Exit>x</Exit>
      </Top>
      <Button onClick={openModal}>How To Use?</Button>
      {modalOpen && (
        <Box ref={el}>
          <Modal open={modalOpen} close={closeModal} header="⬛️ How To Use">
            <Guide />
          </Modal>
        </Box>
      )}
    </Container>
  );
}

export default HowTo;
