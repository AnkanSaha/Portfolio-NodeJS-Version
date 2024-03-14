/* eslint-disable no-unused-vars */
import React from 'react' // Import React
import { OwnerPicture, OwnerName } from '../../core/Keys/variables.keys' // Import the variables from the variables.keys file

// Main Component
export default function OwnerPictureShower () {
  return (
    <>
      <img
        src={OwnerPicture}
        className='ml-[4rem] mt-10 lg:w-[50%] w-[60%]'
        alt={`${OwnerName}'s Image`}
      />
    </>
  )
}
