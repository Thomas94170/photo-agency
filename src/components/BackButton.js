import React from "react";

export const BackButton = () => {
  return (
    <>
      <div className="grid justify-items-stretch">
        <div className="justify-self-end m-10">
          <button
            onClick={() => {
              window.history.back();
            }}
          >
            Retour
          </button>
        </div>
      </div>
    </>
  );
};
