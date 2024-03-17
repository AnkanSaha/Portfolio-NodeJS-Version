/* eslint-disable no-unused-vars */
import React from 'react' // Import React
import { React as Service } from 'react-caches' // Import React Caches
import { OwnerName } from '../core/Keys/OwnerDetails.keys' // Import the Owner Name

// import Components
import Navbar from '../components/Navbar/Navbar' // Import the Navbar component
import Footer from '../components/Footer/Footer' // Import the Footer component
import MainText from '../components/Header/HeaderText' // Import MainText component
import Projects from '../components/Projects/Projects' // Import Projects component

// Main Component
export default function ProjectsPage () {
  // Change the title of the page
  Service.UpdateDocumentTitle(`Projects - ${OwnerName}`) // Change the title of the page to "Projects"
  return (
    <>
      <Navbar />
      <MainText Text='My Projects' />
      <Projects />
      <Footer />
    </>
  )
}
