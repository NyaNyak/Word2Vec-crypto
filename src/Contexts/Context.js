import { createContext, useState } from "react";

export const UserContext = createContext();
// createContext 선언

function UserStore(props) {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  return (
    <UserContext.Provider
      value={{
        text,
        setText,
        output,
        setOutput,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
export default UserStore;

//참고-https://velog.io/@whljm1003/React-context-API-%EC%82%AC%EC%9A%A9%EB%B2%95
