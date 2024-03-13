/* eslint-disable no-unused-vars */
import React from "react"; // Import React
import {OwnerPicture, OwnerName} from '../../core/Keys/variables.keys'; // Import the variables from the variables.keys file

// Main Component
export default function OwnerPictureShower() {
    return (
        <>
        <img src={OwnerPicture} width="400" className="ml-[4rem] mt-10" alt={`${OwnerName}'s Image`}/>
        </>
    )
}