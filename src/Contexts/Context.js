import React, { createContext, useState } from "react";

export const UserContext = createContext();
// createContext 선언

function UserStore(props) {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [output, setOutput] = useState("");
  const [id, setId] = useState("");
  const [state, setState] = useState("");

  return (
    <UserContext.Provider
      value={{
        text,
        setText,
        text2,
        setText2,
        output,
        setOutput,
        id,
        setId,
        state,
        setState,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
export default UserStore;

//참고-https://velog.io/@whljm1003/React-context-API-%EC%82%AC%EC%9A%A9%EB%B2%95
