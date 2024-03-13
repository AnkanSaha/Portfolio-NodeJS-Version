/* eslint-disable no-unused-vars */
import React from "react"; // Import the React library

// import Components
import Navbar from "../components/General/Navbar"; // Import the Navbar component
import OwnerPictureShower from "../components/Home/OwnerPicture"; // Import the OwnerPictureShower component
import MainText from "../components/Home/Main Text"; // Import the MainText component

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="justify-between flex">
        <OwnerPictureShower />
        <MainText />
      </div>
    </>
  );
}
