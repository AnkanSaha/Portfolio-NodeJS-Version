import MainRouter from './Router/Router' // Import the Main Router

import { useSelector } from 'react-redux' // import react-redux

// import Components
import Skeleton from '../Pages/Skeleton' // Import the Skeleton

// import CSS Frameworks
import '../css/tailwind.css' // Import Tailwind CSS
import 'daisyui' // Import Daisy UI
import { ChakraProvider } from '@chakra-ui/react' // Import Chakra Provider

// Main Linker Component
export default function MainLinker () {
  // Initialize the Redux State
  const ReduxStates = useSelector((state) => state.GuestUsers) // Get the Redux State

  return (
    <>
      {ReduxStates.IsLoading === true
        ? (
          <Skeleton />
          )
        : (
          <ChakraProvider>
            <MainRouter />
          </ChakraProvider>
          )}
    </>
  )
}
