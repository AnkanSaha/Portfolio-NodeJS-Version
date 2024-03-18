/* eslint-disable no-unused-vars */
import React from "react"; // Import React

// Import Component
import MainText from "../Header/HeaderText"; // Main Text

// Import ChakraUI

// Main Component
export default function ContactForm() {
  return (
    <>
      <MainText Text="Contact US" />
      <div className="card w-80 bg-base-100 shadow-xl my-5 ml-[2rem] mr-[2.25rem] lg:w-96 lg:ml-[36rem]">
        <figure className="px-10 lg:pt-10 pt-[6.5rem] flex flex-col lg:space-y-9 space-y-11">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <input type="text" placeholder="Enter Title for this Request" className="input input-bordered input-accent w-full max-w-xs" />
          <input type="text" placeholder="Describe all things here..." className="input input-bordered input-accent w-full max-w-xs" />
        </figure>
        <div className="card-body items-center text-center">
          <div className="card-actions">
            <button className="btn btn-primary">Send Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
