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
        <figure className="px-10 pt-10">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
