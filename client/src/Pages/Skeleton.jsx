/* eslint-disable no-unused-vars */
import React from 'react' // Import React
import { React as Updater } from 'react-caches' // Import the React Caches
import { OwnerName } from '../core/Keys/OwnerDetails.keys' // Import the Owner Name
import { LoadingGIF } from '../core/Keys/variables.keys' // Import the Loading GIF

// Main page
export default function SkeletonPage () {
  Updater.UpdateDocumentTitle(`Loading... - ${OwnerName}`) // Update the document title
  return (
    <div className='flex flex-col gap-4 w-[98%] ml-1 lg:ml-4 mt-1'>
      <div className='skeleton h-[98vh] w-full'>
        <div className='mt-[18rem] ml-[28%] lg:ml-[45%]'>
          <img
            className='w-[50%] lg:w-[15%]'
            src={LoadingGIF}
            alt={OwnerName}
          />
        </div>
      </div>
    </div>
  )
}
