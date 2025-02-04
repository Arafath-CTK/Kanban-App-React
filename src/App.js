import React from "react";
import Board from "./components/board/Board.jsx";
import { Provider } from "react-redux";
import store from "./Redux/Store/Store";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" exact Component={Board} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
