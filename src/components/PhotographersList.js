import React, { useState, useEffect } from "react";

export const PhotographersList = () => {
  const [photographers, setPhotographers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("../data/photographers.json").then((res) =>
          res.json()
        );

        console.log(res);
        setPhotographers(res).then((res) => res.json());
        return res;
      } catch (err) {
        console.error("erreur dans la construction " + err);
      }
    }
    fetchData();
  }, []);
  console.log(photographers);
  return (
    <div>
      <h2 className="ml-10 mt-10 text-black flex justify-start text-lg">
        Liste de nos Photographes
      </h2>
      {photographers.map((photographer) => (
        <div key={photographer.id}>
          <h3>{photographer.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default PhotographersList;
