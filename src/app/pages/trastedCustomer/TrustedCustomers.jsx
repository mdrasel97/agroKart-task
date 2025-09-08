import { Award, Panda, Truck } from "lucide-react";
import React from "react";

export default function TrustedCustomers() {
  return (
    <div className="w-11/12 mx-auto bg-gradient-to-b from-[#002b55] to-blue-800  my-20 rounded-2xl">
      <div className="flex items-center justify-center py-10">
        <div className="w-4/6 mx-auto">
          <h2 className="text-4xl mb-12 font-bold text-white text-center">
            Trusted by over 6K+ customers
          </h2>
          {/* parent */}
          <div className="flex w-full items-center justify-between ">
            {/* card-1 */}
            <div>
              <div className="flex items-center justify-center gap-5">
                <Award className="bg-white p-2 rounded-3xl" />
                <div>
                  <h3>Premium</h3>
                  <p>Products</p>
                </div>
              </div>
            </div>
            {/* card-2 */}
            <div>
              <div className="flex items-center justify-center gap-5">
                <Panda />
                <div>
                  <h3>4000+</h3>
                  <p>Google Review</p>
                </div>
              </div>
            </div>
            {/* card-3*/}
            <div>
              <div className="flex items-center justify-center gap-5">
                <Truck />
                <div>
                  <h3>Delivery</h3>
                  <p>Across India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Trusted by over 6K+ customers
// TrustedCustomers
