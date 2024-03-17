import MainRouter from "./Router/Router"; // Import the Main Router
// import Redux Provider
import { Provider } from "react-redux"; // Import React Redux Provider
import ReduxStore from "./Redux/Store"; // Import Redux Store

// import CSS Frameworks
import "../css/tailwind.css"; // Import Tailwind CSS
import "daisyui"; // Import Daisy UI
import { ChakraProvider } from "@chakra-ui/react"; // Import Chakra Provider

// Main Linker Component
export default function MainLinker() {
  return (
    <>
      <ChakraProvider>
        <Provider store={ReduxStore}>
          <MainRouter />
        </Provider>
      </ChakraProvider>
    </>
  );
}
