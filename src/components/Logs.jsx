import React from 'react'
import { useState } from 'react'
function Logs() {
    const [showBalance, setShowBalance] = useState(false);

    const toggleBalance = () => {
        setShowBalance((prevState) => !prevState);  
    }    


return (
 <>
 
        <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-24 py-2.5 text-center float-right mt-5 mr-3" onClick={toggleBalance}>
            {showBalance ? "500 rupees" : "View Balance"}

          </button>
      
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
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Client : Sit Infront of Aqsa Mosque </h2>
          <p className="leading-relaxed">T-Shirt gave to uncle who sit infront of aqsa mosque</p>
          <span className="mt-1 text-gray-500 font-bold">Payment Not Received</span>
        </div>
      </div>
    </div>
  </div>
</section>
 </>
  )
}

export default Logs
