/* eslint-disable no-unused-vars */
import React from "react"; // Import React

// Redux Imports
import { useSelector, useDispatch } from "react-redux"; // Import useSelector from react-redux
import { ModifyEducation } from "../../core/Redux/Slices/SiteInfo"; // Import ModifyEducation from SiteInfo Slice
import { OwnerEducation } from "../../core/Keys/OwnerDetails.keys"; // Import Owner Education

// Import Components
import MainText from "../Header/HeaderText"; // Import MainText component

// Main Components
export default function Education() {
  // Redux States
  const dispatch = useDispatch(); // Dispatch
  const ReduxState = useSelector((state) => state); // Redux States

  // React useEffect
  React.useEffect(() => {
    dispatch(ModifyEducation(OwnerEducation)); // Dispatch ModifyEducation
  }, [ReduxState.SiteInfo.Education, dispatch]);

  return (
    <>
      <MainText Text="Education" />
      <ol className="relative border-s border-gray-200 dark:border-gray-700 my-5 lg:my-0 lg:mb-5 mx-4 lg:mx-[4.5rem]">
        {ReduxState.SiteInfo.Education.map((education) => {
          return (
            <li key={education.SchoolName} className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {education.Date}
              </time>
              <h3 className="lg:text-lg font-semibold text-gray-900 dark:text-black">
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
