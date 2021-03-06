import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";
import React from "react";
import NotFound from "./NotFound";
import EResult from "./EResult";

import DResult from "./DResult";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserStore from "./Contexts/Context";

function App() {
  return (
    <UserStore>
      <Router>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/encrypted" element={<EResult />} />
          <Route path="/decrypted" element={<DResult />} />
          <Route element={<NotFound />} />
        </Routes>
      </Router>
    </UserStore>
  );
}

export default App;
