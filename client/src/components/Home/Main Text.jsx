/* eslint-disable react/no-unescaped-entities */
import { OwnerName, OwnerSkills } from "../../core/Keys/variables.keys"; // Import the OwnerName variable

export default function MainText() {
  return (
    <>
      <div className="main-text ml-[10rem] mt-[6.25rem]">
        <h1 className="mb-4 lg:ml-[11.25rem] ml-[0.75rem] text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-7xl dark:text-black">
          Hello everyone, I'm{" "}
          <span className="text-indigo-600">{OwnerName.split(" ")[0]}</span>
        </h1>
        <p className="mb-6 text-lg px-5 lg:px-5 font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Empowering businesses with robust backend solutions! I'm a skilled
          Node JS Developer, specializing in backend development. Proficient in
          {OwnerSkills.map((Skill, index) => index == 0 ? ` ${Skill}`: `, ${Skill}`)}. Let's build
          scalable, efficient systems together. Reach out for your next
          project!
        </p>
      </div>
    </>
  );
}
