"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div>
      <Card className="bg-gradient-to-bl from-[#002B55] to-blue-900 text-white mt-10">
        <CardContent className="w-10/12 mx-auto py-8 px-6 flex flex-wrap md:flex-nowrap justify-between gap-6">
          {/* About Section */}
          <div className="md:w-3/5 w-full">
            <h2 className="text-xl font-bold mb-4">Join Our JF Products</h2>
            <p className="text-sm text-gray-300">
              We’ll tell you about store updates and discounts
            </p>
            <form className="max-w-md py-6 rounded-lg space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-500 rounded focus:ring-2 focus:ring-blue-400"
                />
                <span className="text-xs dark:text-gray-300">
                  Yes, subscribe me to your newsletter.
                </span>
              </label>

              <button
                type="submit"
                className="bg-white text-black px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full"
              >
                Join Now
              </button>
            </form>
          </div>

          {/* Links Section - 20% width */}
          <div className="md:w-1/5 w-full">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section - 20% width */}
          <div className="md:w-1/5 w-full">
            <h2 className="text-xl font-bold mb-4">Helpful</h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  My Account
                </a>
              </li>
            </ul>
          </div>
        </CardContent>

        {/* logo area  */}
        <div className="md:flex items-center justify-between w-10/12 mx-auto">
          <div className="flex items-center justify-center gap-3">
            <div>
              <img
                src="/assets/logo.png"
                className="w-8 md:w-24 bg-white rounded-full h-28"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold ">Our Branches</h3>
              <p>Coimbatore, Chennai, Hyderabad, Goa, Kochi</p>
            </div>
          </div>
          <div>
            <Button>Contact Us</Button>
          </div>
        </div>
      </Card>
      <div className="md:flex items-center justify-between w-10/12 mx-auto">
        <div className="mt-0 py-4 text-center text-gray-400 text-sm">
          Copyright &copy; {new Date().getFullYear()} JF Products. All rights
          reserved
        </div>
        <div className="">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">
              <Facebook />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Twitter />
            </a>
            <a href="#" className="hover:text-pink-500">
              <Instagram />
            </a>
            <a
              href="https://www.linkedin.com/in/rasel-developer/"
              className="hover:text-blue-700"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
