import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";

import '../src/App.css';
import Home from "./components/Home";
import FaaS from "./components/FaaS";
import Navbar from "./components/Navbar";
const { Content } = Layout;
function App() {
  return (
    <Router>
      {/* <Layout> */}
        <Navbar />
        <Content>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/faas" element={<FaaS />} />
          </Routes>
        </Content>
      {/* </Layout> */}
    </Router>
  );
}

export default App;
