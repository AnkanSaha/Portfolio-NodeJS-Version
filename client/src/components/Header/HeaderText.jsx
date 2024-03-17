/* eslint-disable no-unused-vars */
import React from "react"; // Import React

// Main Component
export default function MainText(Props) {
  return (
    <h1 className="my-[3.25rem] lg:my-[4.25rem] text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
    <span className=" text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
      {Props.Text}
    </span>{" "}
  </h1>
  );
}

// Default Props
MainText.defaultProps = {
  Text: "This is HeaderText",
};