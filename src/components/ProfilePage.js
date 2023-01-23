import React from "react";

import data from "../data/photographers.json";
import { Footer } from "./Footer";
import { Header } from "./Header";

const ProfilePage = () => {
  console.log(data.media.photographerId);
  return (
    <>
      <Header />
      <h2 className=" m-10 text-center text-xl">Ses meilleures réalisations</h2>
      <div className="m-10 grid grid-cols-2 gap-5 grid justify-items-stretch">
        {data.media.map((media) => (
          <div className="justify-self-center">
            <div
              className="hover:scale-150 transition duration-150 ease-out"
              key={media.photographerId}
            >
              <p className="text-center text-black m-2">
                {media.photographerId}
              </p>
              <p className="text-center text-black m-2">{media.title}</p>
              <img
                className="shadow-xl shadow-gray-500/40 rounded-md border border-black text-center m-1"
                src={media.image}
                alt={media.title}
                width={300}
                height={"auto"}
              />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
