import React from 'react'
import { useState } from 'react'
function Logs() {
    const [showBalance, setShowBalance] = useState(false);

    const toggleBalance = () => {
        setShowBalance((prevState) => !prevState);  
    }    


return (
 <>
 
    <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-12 md:px-24 py-2.5 text-center mt-2" onClick={toggleBalance}>
      {showBalance ? "500 rupees" : "View Balance"}
    </button>

      


    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-100">
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-gray-700">NUMAN</span>
              <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
              <span class="mt-1 text-gray-500 font-bold">2000$</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Client : Aqsa Mosque Uncle</h2>
              <p class="leading-relaxed">Gave 7 tees to aqsa masjid uncle and get 100 rupee 20 rupee extra ,and since two tees were defected so he will sell those tee at rupee 50 per so total 100 .</p>
              <span class="mt-1 text-gray-500 font-bold">100 Rupee Received</span>

            </div>
          </div>
        </div>
      </div>
    </section>
 </>
  )
}

export default Logs
