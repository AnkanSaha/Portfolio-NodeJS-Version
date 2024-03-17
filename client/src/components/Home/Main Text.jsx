/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { OwnerName, OwnerSkills } from '../../core/Keys/OwnerDetails.keys' // Import the OwnerName variable
import { useSelector, useDispatch } from 'react-redux' // import redux from 'react-redux
import { ModifyJWT } from '../../core/Redux/Slices/Guest Users' //  imports actions
import React from 'react' // import react library from 'react
import { API_Call } from '../../core/Keys/variables.keys' // import variables

export default function MainText () {
  // Initialize redux state
  const dispatch = useDispatch() // use dispatch
  const ReduxState = useSelector((state) => state) // use redux state

  // Get the JWT from the server
  React.useEffect(() => {
    ReduxState.GuestUsers.JWT === null
      ? API_Call.Get('/get/auth/generate-JWT-Token').then((Response) =>
        dispatch(ModifyJWT(Response.data))
      )
      : null
  }, [])
  return (
    <>
      <div className='main-text ml-[9rem] mt-[6.25rem] lg:mt-[5.25rem]'>
        <h1 className='mb-4 lg:ml-[11.25rem] ml-[0.75rem] text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black'>
          Hello everyone, I'm{' '}
          <span className='text-indigo-600'>{OwnerName.split(' ')[0]}</span>
        </h1>
        <p className='mb-6 text-lg px-5 lg:px-5 font-normal text-gray-500 lg:text-base sm:px-16 xl:px-48 dark:text-gray-400'>
          I'm here to supercharge your business with top-notch <br />
          backend solutions. As a dedicated Node JS Developer, I specialize in{' '}
          <br />
          crafting powerful backend systems that drive your applications <br />
          forward. My expertise spans a wide array of technologies including{' '}
          <br />
          {OwnerSkills.map((Skill, index) =>
            index == 0 ? ` ${Skill}` : `, ${Skill}`
          )}{' '}
          <br />
          . Whether you're looking to streamline processes, enhance performance,
          or build from the ground up, I'm your go-to developer. <br /> Let's
          collaborate on creating scalable, efficient, and reliable systems that
          propel your ideas to success. Get in touch, and let's bring your
          vision to life!
        </p>
      </div>
    </>
  )
}
