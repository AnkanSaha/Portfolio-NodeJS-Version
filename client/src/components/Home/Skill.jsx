/* eslint-disable no-unused-vars */
import React from "react"; // Import React
import { Button } from "@chakra-ui/react"; // Import Chakra UI Button
import { OwnerSkillsIcons } from "../../core/Keys/OwnerDetails.keys"; // Import Owner Skills Icons
import { MdExpandMore, MdExpandLess } from "react-icons/md"; // More Icon

// main component
export default function MiddleText() {
  // State for the component
  const [MoreSkillShow, setMoreSkillShow] = React.useState(false); // State for More Skill Show
  const [CountSkill, setCountSkill] = React.useState(2); // State for Count of Skill
  
  // Function for More Skill Show
  const ShowMoreSkill = (event) => {
    event.preventDefault(); // Prevent Default Event
    setMoreSkillShow(true); // Set More Skill Show to True
    setCountSkill(OwnerSkillsIcons.length); // Set Count of Skill to Length of OwnerSkillsIcons
  }

  const ShowLessSkill = (event) => {
    event.preventDefault(); // Prevent Default Event
    setMoreSkillShow(false); // Set More Skill Show to False
    setCountSkill(2); // Set Count of Skill to 2
  }
  return (
    <>
      <h1 className="mb-4 my-[3.25rem] lg:my-[6.25rem] text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className=" text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Skills
        </span>{" "}
      </h1>

      <div className="flex lg:flex-row flex-col flex-wrap">
        {OwnerSkillsIcons.map((SkillDetails, index) => {
          return index <= CountSkill ? (
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
          ) : null;
        })}
        {MoreSkillShow === false ? (
          <Button
            rightIcon={<MdExpandMore />}
            onClick={ShowMoreSkill}
            className="text-center my-5 mx-5 lg:ml-[41.25rem]"
            colorScheme="teal"
            size="lg"
          >
            View More
          </Button>
        ) : <Button
        rightIcon={<MdExpandLess />}
        onClick={ShowLessSkill}
        className="text-center my-5 mx-5 lg:ml-[41.25rem]"
        colorScheme="teal"
        size="lg"
      >
        View Less
      </Button>}
      </div>
    </>
  );
}
