import React from "react"; // eslint-disable-line no-unused-vars
import { FaLock } from "react-icons/fa"; // Import Icon

// import ChakraUI
import { Input, Button } from "@chakra-ui/react"; // ChakraUI Input

// Main component
export default function LoginBox() {
  // States
  const [Password, setPassword] = React.useState({
    ADMIN_PASSWORD: "",
  });

  // Onchange handlers
  const onchange = (event) => {
    console.log(Password);
    event.preventDefault(); // prevent default
    setPassword({
      ...Password,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="mx-10 my-52 lg:my-44 space-y-8">
        <Input
          placeholder="Enter Admin Password"
          onChange={onchange}
          value={Password.ADMIN_PASSWORD}
          name="ADMIN_PASSWORD"
        />
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
