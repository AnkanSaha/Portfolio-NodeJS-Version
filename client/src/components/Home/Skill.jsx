/* eslint-disable no-unused-vars */
import React from "react"; // Import React
import { OwnerSkillsIcons } from "../../core/Keys/OwnerDetails.keys"; // Import Owner Skills Icons

// main component
export default function MiddleText() {
  return (
    <>
      <h1 className="mb-4 my-[3.25rem] lg:my-[6.25rem] text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className=" text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          My Skills
        </span>{" "}
      </h1>

      <div className="flex lg:flex-row flex-col flex-wrap">
        {OwnerSkillsIcons.map((SkillDetails) => {
          return (
            <div
              key={SkillDetails.name}
              className="card w-auto lg:w-1/4 lg:h-1/4 bg-base-100 shadow-xl lg:mx-12 my-5"
            >
              <figure>
                <img src={SkillDetails.Icons} alt={SkillDetails.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{SkillDetails.name}</h2>
                <p> {SkillDetails.description}</p>
                <div className="card-actions justify-end">
                  {SkillDetails.Specialty.map((Specialty) => {
                    return (
                      <div key={Specialty} className="badge badge-outline">
                        {Specialty}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
