/* eslint-disable no-unused-vars */
import React from "react"; // Import React
import { OwnerEducation } from "../../core/Keys/OwnerDetails.keys"; // Import Owner Education

// Main Components
export default function Education() {
  return (
    <>
      <h1 className="my-[3.25rem] lg:my-[4.25rem] text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className=" text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Education
        </span>{" "}
      </h1>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 my-5 lg:my-0 lg:mb-5 mx-4 lg:mx-[4.5rem]">
        {OwnerEducation.map(education => {
          return (
            <li key={education.SchoolName} className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {education.Date}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {education.SchoolName}
              </h3>
              <h2>{education.Degree}</h2>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
               {education.Description}
              </p>
            </li>
          );
        })}
      </ol>
    </>
  );
}
