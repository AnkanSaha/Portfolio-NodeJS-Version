/* eslint-disable no-unused-vars */
import React from 'react' // Import the React library

// import Components
import Navbar from '../components/Navbar/Navbar'; // Import the Navbar component
import Footer from '../components/Footer/Footer'; // Import the Footer component
import OwnerPictureShower from '../components/Home/OwnerPicture'; // Import the OwnerPictureShower component
import MainText from '../components/Home/Main Text'; // Import the MainText component
import Skill from '../components/Home/Skill'; // Import the MainText component
import Education from '../components/Home/Education'; // Import the Education component
 
export default function HomePage () {
  return (
    <>
      <Navbar />
      <div className='justify-between space-x-0 lg:flex'>
        <OwnerPictureShower />
        <MainText />
      </div>
      <Skill />
      <Education />
      <Footer />
    </>
  )
}
