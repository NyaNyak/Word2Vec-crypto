import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  margin-top: 20px;
  color: red;
  font-family: "굴림", sans-serif;
  font-size: 20px;
`;

const Text = styled.div`
  display: flex;
  margin-top: 10px;
  font-family: "굴림", sans-serif;
  font-size: 17px;
`;

function Guide() {
  return (
    <Container>
      <Form>
        <Inputs>
          <Title>---암호문 생성 방법---</Title>
          <Text>몰?루</Text>
          <Title>---복호화 방법---</Title>
          <Text>몰??루</Text>
        </Inputs>
      </Form>
    </Container>
  );
}

export default Guide;
