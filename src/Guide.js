import { gql, useMutation } from "@apollo/client";
import { logUserIn } from "../client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  padding: 0 10px;
  width: 300px;
  height: 40px;
  font-family: "Arial", sans-serif;
  font-size: 18px;
  border-radius: 7px;
  margin-bottom: 10px;
  border: 1px solid gray;
  outline: none;
`;

const SubmitBtn = styled.button`
  width: 300px;
  height: 40px;
  border-radius: 7px;
  color: white;
  background-color: #8c8c8c;
  font-family: "Arial", sans-serif;
  font-size: 18px;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  border: none;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: -10px;
  font-family: "Arial", sans-serif;
  font-size: 15px;
`;

const Errors = styled.div`
  position: absolute;
  top: 100%;
  align-self: flex-start;
  margin-left: 10px;
  margin-top: 4px;
`;

const Error = styled.div`
  margin: 2px 0;
`;

const LOGIN_MUTATION = gql`
  mutation login($userId: String!, $password: String!) {
    login(userId: $userId, password: $password) {
      ok
      error
      token
    }
  }
`;

const schema = yup.object().shape({
  userId: yup.string().required(""),
  password: yup.string().required(""),
});

function Guide() {
  return (
    <Container>
      <Form>
        <Inputs>
          <Input type="text" placeholder="Your ID" {...register("userId")} />
          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </Inputs>

        <SubmitBtn type="submit" disabled={loading}>
          {loading ? "Login..." : "Login"}
        </SubmitBtn>
        <Text>OR</Text>
      </Form>
      <Errors>
        {errors.userId?.message && <Error>{errors.userId?.message}</Error>}
        {errors.password?.message && <Error>{errors.password?.message}</Error>}
        {errors.result?.message && <Error>{errors.result?.message}</Error>}
      </Errors>
    </Container>
  );
}

export default Guide;
