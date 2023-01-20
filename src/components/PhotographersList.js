import React from "react";
import data from "../data/photographers.json";

export const PhotographersList = () => {
  return (
    <div className="m-10">
      <h2 className="ml-10 mt-10 mb-10 text-black flex justify-start text-xl">
        Liste de nos Photographes
      </h2>
      <div className="m-10 flex flex-col md:flex-row">
        {data.photographers.map((photographer) => (
          <div className="w-full md:w-1/3">
            <div className="" key={photographer.id}>
              <p className="text-center text-red-600 text-lg">
                {photographer.name}
              </p>
              <div className="rounded-full border border-black m-3">
                <div className="rounded-full border border-red-600 text-center m-1">
                  <img
                    src={photographer.portrait}
                    alt={photographer.name}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <p className="text-center text-black m-2">
                {photographer.city} - {photographer.country}
              </p>

              <p className="text-center text-red-600">
                Prix : {photographer.price}€
              </p>

              <p className="text-center text-black m-2">
                {photographer.tagline}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotographersList;
