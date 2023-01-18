import React from "react";
import Image from "../plateforme-logo/logophoto.png";

export const Header = () => {
  return (
    <>
      <div className="mt-10">
        <div className="flex justify-between">
          <img src={Image} alt="Logo-Agence" height={150} width={150} />
          <h1 className=" italic  text-7xl mt-10 mr-10 pr-10 ">
            <span className="text-red-600 mr-1">Photo</span>
            <span className="text-black ml-1">Agency</span>
          </h1>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-center text-black">
          <p className=" italic text-2xl">
            La plateforme qui met en relation professionnels et futurs clients !{" "}
          </p>
        </div>
      </div>
    </>
  );
};
