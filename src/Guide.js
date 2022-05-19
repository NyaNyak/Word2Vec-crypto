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
          <Text>1. Encrypt 창에 텍스트를 영문으로 입력하세요.</Text>
          <Text>2. Access 버튼을 클릭하면 암호문이 생성됩니다.</Text>
          <Text>3. 함께 생성된 숫자 key 값은 복호화 시 사용됩니다.</Text>
          <Text>※ 영문 텍스트만 암호화 가능합니다.</Text>
          <Title>---복호화 방법---</Title>
          <Text>1. Decrypt 창에 암호문과 key 값을 입력하세요.</Text>
          <Text>2. Access 버튼을 클릭하면 암호문이 복호화됩니다.</Text>
          <Text>※ key 값이 유효하지 않으면 복호화할 수 없습니다.</Text>
          <Text>※ 암호문은 최초 1회만 복호화됩니다.</Text>
        </Inputs>
      </Form>
    </Container>
  );
}

export default Guide;
