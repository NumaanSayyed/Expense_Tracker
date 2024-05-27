import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import add from '../assets/add.png';

function Logs() {
  const [modal, setModal] = useState(false);
  
  const [showBalance, setShowBalance] = useState(false);
  const { user, isAuthenticated } = useAuth0();

  const toggleBalance = () => {
    setShowBalance((prevState) => !prevState);
  };

 
  return (
    <>
      <div
        id="crud-modal"
        aria-hidden="true"
        className={`fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-50 ${modal ? '' : 'hidden'}`}
      >
        <div className="relative w-full max-w-md bg-transparent radius">
          <div className="relative bg-transparent rounded-lg shadow">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Enter Details:
              </h3>
              <button
                type="button"
                onClick={() => setModal(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form method="POST" className="p-4 md:p-5" >
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="TotalAmount"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Total Amount
                  </label>
                  <input
                    type="number"
                    name="TotalAmount"
                    id="TotalAmount"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-2"
                    placeholder="Enter the amount..."
                  />

                  <label
                    htmlFor="ClientName"
                    className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Client Name
                  </label>
                  <input
                    type="text"
                    name="ClientName"
                    id="ClientName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Client Name..."
                  />

                  <label
                    htmlFor="ReceivedAmount"
                    className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Received Amount
                  </label>
                  <input
                    type="number"
                    name="ReceivedAmount"
                    id="ReceivedAmount"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter Received Amount..."
                  />

                  <label
                    htmlFor="desc"
                    className="block text-sm font-medium mt-2 text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    id="desc"
                    name="desc"
                    rows={4}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Write a description..."
                  />
                </div>
              </div>
              <input
                type="submit"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 cursor-pointer"
                placeholder="Enter Received Amount..."
              />
            </form>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4 mt-2">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-12 md:px-24 py-2.5 text-center"
          onClick={toggleBalance}
        >
          {showBalance ? "500 rupees" : "View Balance"}
        </button>

        <img
          className="h-16 w-16 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-16 lg:w-16 rounded-full transition-all duration-300;
          hover:scale-110 cursor-pointer border-4 border-white"
          src={add}
          alt="Forest Image"
          title="If you have any suggestion share with us"
          onClick={() => setModal(true)}
        /> 
      </div>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">NUMAN</span>
                <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                <span className="mt-1 text-gray-500 font-bold">2000$</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Client: Aqsa Mosque Uncle</h2>
                <p className="leading-relaxed">Gave 7 tees to Aqsa Masjid uncle and got 100 rupees, 20 rupees extra. Two tees were defective, so he will sell those for 50 rupees each, totaling 100 rupees.</p>
                <span className="mt-1 text-gray-500 font-bold">100 Rupees Received</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Logs;
