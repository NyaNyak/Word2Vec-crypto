import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";
import React from "react";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
