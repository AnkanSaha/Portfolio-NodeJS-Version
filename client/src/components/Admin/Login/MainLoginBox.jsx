import React from "react"; // eslint-disable-line no-unused-vars
import { FaLock } from "react-icons/fa"; // Import from React
// import ChakraUI
import { Input, Button } from "@chakra-ui/react"; // ChakraUI Input

// Main component
export default function LoginBox() {
  return (
    <>
      <div className="mx-10 my-52 lg:my-44 space-y-8">
        <Input placeholder="Enter Admin Password" />
        <Button
          rightIcon={<FaLock />}
          leftIcon={<FaLock />}
          colorScheme="facebook"
          className="ml-[5.25rem] lg:ml-[39.5rem]"
        >
          {" "}
          Login Now
        </Button>
      </div>
    </>
  );
}
