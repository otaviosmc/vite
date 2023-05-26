import "./App.css";
import styled from "styled-components";
import React from "react";
import Header from "./components/Header";

const Box = styled.div`
  width: 100%;
  text-align: center;
  min-height: 100vh;
  color: #fff;
  background-color: #000;
`;
function App() {
  return (
    <Box>
      <Header />
    </Box>
  );
}

export default App;
