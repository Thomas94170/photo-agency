import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { PhotographersList } from "./components/PhotographersList";

function App() {
  return (
    <div className=" ">
      <Header />
      <Content />
      <PhotographersList />
    </div>
  );
}

export default App;
