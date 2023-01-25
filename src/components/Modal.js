import React, { useState } from "react";

export const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    if (!modal) {
      document.querySelector(".contactez").style.display = "none";
    } else {
      document.querySelector(".contactez").style.display = "block";
    }
  };
  return (
    <>
      <button
        onClick={toggleModal}
        className="border border-black rounded-full p-2 text-white bg-black shadow-xl shadow-gray-500/40 contactez"
      >
        Contactez le photographe !
      </button>

      {modal && (
        <form
          className="space-y-6"
          action="https://formspree.io/f/xjvzllob"
          method="POST"
        >
          <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Information personnelle
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Renseignez votre adresse mail afin d'être contacté
                </p>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Prénom
                    </label>
                    <input
                      required
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      className="mt-1 block w-fulNamel rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nom
                    </label>
                    <input
                      required
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      for="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Addresse Mail
                    </label>
                    <input
                      required
                      type="text"
                      name="email-address"
                      id="email-address"
                      autocomplete="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Votre message
                    </label>
                    <input
                      required
                      type="textarea"
                      name="message"
                      id="message"
                      autocomplete="message"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      for="street-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Adresse
                    </label>
                    <input
                      required
                      type="text"
                      name="street-address"
                      id="street-address"
                      autocomplete="street-address"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      for="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Ville
                    </label>
                    <input
                      required
                      type="text"
                      name="city"
                      id="city"
                      autocomplete="address-level2"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      for="postal-code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Code Postal
                    </label>
                    <input
                      required
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autocomplete="postal-code"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={toggleModal}
              type="button"
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Retour
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Soumettre
            </button>
          </div>
        </form>
      )}
    </>
  );
};
