import { Award, Panda, Truck } from "lucide-react";
import React from "react";

export default function TrustedCustomers() {
  return (
    <div className="w-11/12 mx-auto bg-gradient-to-b from-[#002b55] to-blue-800 mt-16 rounded-2xl">
      <div className="flex items-center justify-center py-10">
        <div className="md:w-4/6 mx-auto">
          <h2 className=" text-2xl md:text-4xl mb-12 font-bold text-white text-center">
            Trusted by over 6K+ customers
          </h2>
          {/* parent */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:w-full items-center justify-between gap-5">
            {/* card-1 */}
            <div>
              <div className="flex items-center justify-center gap-4">
                <Award className="bg-white p-2 rounded-full w-16 h-16" />
                <div>
                  <h3 className="text-white text-lg font-semibold">Premium</h3>
                  <p className="text-white ">Products</p>
                </div>
              </div>
            </div>
            {/* card-2 */}
            <div>
              <div className="flex items-center justify-center gap-5">
                <Panda className="bg-white p-2 rounded-full w-16 h-16" />
                <div>
                  <h3 className="text-white text-lg font-semibold">4000+</h3>
                  <p className="text-white">Google Review</p>
                </div>
              </div>
            </div>
            {/* card-3*/}
            <div>
              <div className="flex items-center justify-center gap-5">
                <Truck className="bg-white p-2 rounded-full w-16 h-16" />
                <div>
                  <h3 className="text-white text-lg font-semibold">Delivery</h3>
                  <p className="text-white">Across India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// TrustedCustomers
