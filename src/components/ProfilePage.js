import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import data from "../data/photographers.json";
import profil from "../data/photographers.json";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Modal } from "./Modal";

export const ProfilePage = () => {
  let id = useParams().id;
  let photographerId = useParams().photographerId;

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="">
          {data.photographers
            .filter(
              (photographer) => parseInt(photographer.id) === parseInt(id)
            )
            .map((photographer) => (
              <div className="mt-10 grid ">
                <div className="justify-self-center" key={photographer.id}>
                  <p className="text-center text-red-600 text-lg">
                    {photographer.name}
                  </p>
                  <div className="m-3">
                    <div className="">
                      <img
                        className="rounded-full border border-black text-center m-1"
                        src={photographer.portrait}
                        alt={photographer.name}
                        width={"200"}
                        height={"auto"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Modal />
      </div>
      <h2 className=" m-10 text-center text-xl">Ses meilleures réalisations</h2>
      <div className="m-10 grid grid-cols-2 gap-5 grid justify-items-stretch">
        {profil.media
          .filter(
            (media) =>
              parseInt(media.photographerId) === parseInt(photographerId)
          )
          .map((media) => (
            <div className="justify-self-center m-10">
              <div
                className="hover:scale-150 transition duration-150 ease-out"
                key={media.photographerId}
              >
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
