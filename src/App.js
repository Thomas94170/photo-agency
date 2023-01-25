import React from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { PhotographersList } from "./components/PhotographersList";

function App() {
  return (
    <div className=" ">
      <Header />
      <div className="mt-5">
        <div className="flex justify-center text-black">
          <p className=" italic text-2xl m-5">
            La plateforme qui met en relation professionnels et futurs clients !{" "}
          </p>
        </div>
      </div>
      <PhotographersList />

      <Footer />
    </div>
  );
}

export default App;
