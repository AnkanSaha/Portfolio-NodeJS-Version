/* eslint-disable no-unused-vars */
import React from 'react' // Import React
import { OwnerSkillsIcons } from '../../core/Keys/variables.keys' // Import Owner Skills Icons

// main component
export default function MiddleText () {
  return (
    <>
      <h1 className='mb-4 mt-[3.25rem] lg:mt-[6.25rem] text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl'>
        <span className=' text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
          My Skills
        </span>{' '}
      </h1>

      <div className='card w-auto lg:w-1/4 bg-base-100 shadow-xl'>
        <figure>
          <img src={OwnerSkillsIcons[0].Icons} alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{OwnerSkillsIcons[0].name}</h2>
          <p> {OwnerSkillsIcons[0].description}</p>
          <div className='card-actions justify-end'>
            <div className='badge badge-outline'>Fashion</div>
            <div className='badge badge-outline'>Products</div>
          </div>
        </div>
      </div>
    </>
  )
}
