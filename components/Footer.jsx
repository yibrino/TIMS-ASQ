import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 bg-blue-600 md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="/"
          className="flex justify-center items-center text-xl font-bold text-white dark:text-white"
        >
          Inventory Management System
        </a>

        <ul className="flex flex-wrap justify-center items-center mb-6 text-white  font-bold text-xl dark:text-white">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              About Us{" "}
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Contact Us{" "}
            </a>
          </li>
        </ul>
        <span className="text-sm text-white sm:text-center dark:text-gray-400">
          © 2024-2025{" "}
          <a href="#" className="hover:underline">
            Inventory Management System <sup> IMS</sup>
          </a>
          .Tigray Automotive Engineering Technology .All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
