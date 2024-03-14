/* eslint-disable react/no-unescaped-entities */
import { OwnerName } from "../../core/Keys/variables.keys"; // Import the OwnerName variable

export default function MainText() {
  return (
    <>
      <div className="main-text mr-[10rem] mt-[6.25rem]">
        <h1 className="mb-4 ml-[6.25rem] text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Hello everyone, I'm <span className="text-indigo-600">{OwnerName}</span>
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Node.js enthusiast skilled in building robust APIs, optimizing performance, and ensuring data integrity.
        </p>
      </div>
    </>
  );
}
