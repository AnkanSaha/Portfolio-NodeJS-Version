/* eslint-disable no-unused-vars */
import React from "react"; // Import the React library
import { React as Service } from "react-caches"; // Import React Caches
import { OwnerName } from "../core/Keys/OwnerDetails.keys"; // Import the Owner Name
import { useSelector } from "react-redux"; // import react-redux

// import Components
import Navbar from "../components/Navbar/Navbar"; // Import the Navbar component
import Footer from "../components/Footer/Footer"; // Import the Footer component
import OwnerPictureShower from "../components/Home/OwnerPicture"; // Import the OwnerPictureShower component
import MainText from "../components/Home/Main Text"; // Import the MainText component
import Skill from "../components/Home/Skill"; // Import the MainText component
import Education from "../components/Home/Education"; // Import the Education component
import Certification from "../components/Home/Certification"; // Import the Certification component

export default function HomePage() {
  // Change the title of the page
  Service.UpdateDocumentTitle(`Home - ${OwnerName}`); // Change the title of the page to "Home"

  // Initialize the Redux State
  const ReduxStates = useSelector((state) => state.GuestUsers); // Get the Redux State

  return (
    <>
      <Navbar />
      <div className="justify-between space-x-0 lg:flex">
        <OwnerPictureShower />
        <MainText />
      </div>
      <Skill />
      <Education />
      <Certification />
      <Footer />
    </>
  );
}
