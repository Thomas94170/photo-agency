import React from "react";
import "./App.css";
import { Header } from "./components/Header";

import { PhotographersList } from "./components/PhotographersList";

function App() {
  return (
    <div className=" ">
      <Header />

      <PhotographersList />
    </div>
  );
}

export default App;
