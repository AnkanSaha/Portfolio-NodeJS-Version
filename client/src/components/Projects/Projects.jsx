/* eslint-disable no-unused-vars */
import React from 'react' // Import React
import { OwnerProjects } from '../../core/Keys/OwnerDetails.keys' // Import Projects
import { React as Service } from 'react-caches' // Import React-caches

// Redux Imports
import { useSelector, useDispatch } from 'react-redux' // Import useSelector from react-redux
import { ModifyProjects } from '../../core/Redux/Slices/SiteInfo' // Import ModifyProjects from SiteInfo Slice

// Colors
const BgColors = [
  'bg-red-700',
  'bg-yellow-700',
  'bg-green-700',
  'bg-blue-700',
  'bg-indigo-700',
  'bg-purple-700',
  'bg-pink-700'
]

// Main Component
export default function Projects () {
  // Redux States
  const dispatch = useDispatch() // Dispatch
  const ReduxState = useSelector((state) => state) // Redux States

  // React UseEffect
  React.useEffect(() => {
    dispatch(ModifyProjects(OwnerProjects)) // Dispatch OwnerProjects
  }, [ReduxState.SiteInfo.Projects, dispatch])
  return (
    <div className='flex flex-row flex-wrap'>
      {ReduxState.SiteInfo.Projects.map((project) => {
        return (
          <div
            key={project.ProjectsName}
            className={`card mx-3 lg:mx-5 my-3 w-[21rem] text-white ${
              BgColors[Service.Random.Number(1, true, [0, 1, 2, 3, 4, 5, 6])]
            }`}
          >
            <div className='card-body'>
              <h2 className='card-title'>{project.ProjectsName}</h2>
              <p>{project.Description}</p>
              <div className='card-actions justify-end'>
                <button
                  onClick={() => {
                    window.open(project.URL, '_blank')
                  }}
                  className='btn'
                >
                  View
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
