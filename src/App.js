import React from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { PhotographersList } from "./components/PhotographersList";

function App() {
  return (
    <div className=" ">
      <Header />

      <PhotographersList />

      <Footer />
    </div>
  );
}

export default App;
