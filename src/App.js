import Landing from "./components/Landing";
import Navigation from "./components/Nav";
import Todos from "./components/Todos";
import React from "react";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="todos" element={<Todos />} />
      </Routes>
    </>
  );
}

export default App;
