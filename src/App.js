/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Hackathon from "./comp/Hackathon";
import Symp from "./symp/Symp";
import Table from "./comp/Table";
import Guidelines from "./comp/Guidelines";

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap"
        rel="stylesheet"
      ></link>
      <div class="bg-white">
        <BrowserRouter>
          <Routes>
            <Route path="/hackathon" element={<Hackathon />} />
            <Route path="/hackathon/guidelines" element={<Guidelines />} />
            <Route path="" element={<Symp />} />
            <Route path="/hackathon/PS" element={<Table />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
