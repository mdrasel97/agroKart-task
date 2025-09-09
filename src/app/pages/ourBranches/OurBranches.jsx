"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
// import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function OurBranches() {
  return (
    <div className="mt-20">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our <span className="text-blue-900">Branches</span>
        <div className="w-20 h-1 bg-blue-900 mx-auto mt-3 rounded-full"></div>
      </h2>

      <Card className="max-w-7xl mx-auto shadow-lg rounded-2xl">
        <CardContent className="flex flex-col md:flex-row gap-10 p-8">
          {/* Left: Contact Form */}
          <div className="md:w-1/2 bg-gradient-to-br from-[#002B55] to-blue-900 text-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
              />
              <Button
                type="submit"
                className="w-full bg-primary text-white hover:bg-blue-900 rounded-lg py-3"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Right: Branch Locations + Map */}
          <div className="md:w-1/2 space-y-6">
            {/* <div className="bg-gray-50 dark:bg-slate-900 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Branches
              </h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li>
                  <h3 className="font-semibold">Dhaka Branch</h3>
                  <p>123 Main Street, Dhaka, Bangladesh</p>
                </li>
                <li>
                  <h3 className="font-semibold">Chittagong Branch</h3>
                  <p>456 Central Road, Chittagong, Bangladesh</p>
                </li>
                <li>
                  <h3 className="font-semibold">Khulna Branch</h3>
                  <p>789 Market Street, Khulna, Bangladesh</p>
                </li>
              </ul>
            </div> */}

            {/* Google Map Embed */}
            <div className="w-full h-full rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.903070452112!2d90.3914631154318!3d23.750885194611225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894c72213bb%3A0x9b7f9b0f5d8e8d3!2sDhaka!5e0!3m2!1sen!2sbd!4v1630245226430!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
