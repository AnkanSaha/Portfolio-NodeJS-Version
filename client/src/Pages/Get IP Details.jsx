/* eslint-disable no-unused-vars */
import React from 'react' // Import React
import { React as Service } from 'react-caches' // Import React Caches
import { OwnerName } from '../core/Keys/OwnerDetails.keys' // Import the Owner Name

// import Components
import Navbar from '../components/Navbar/Navbar' // Import the Navbar component
import Footer from '../components/Footer/Footer' // Import the Footer component

import IPDetails from '../components/IP Details/Details' // Import the IP Details component

// Main Component
export default function IPdetailsPage () {
  // Change the title of the page
  Service.UpdateDocumentTitle(`Get Your IP Address - ${OwnerName}`) // Change the title of the page to "Contact"

  return (
    <>
      <Navbar />
      <IPDetails />
      <Footer />
    </>
  )
}
