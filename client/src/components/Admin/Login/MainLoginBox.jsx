import React from "react"; // eslint-disable-line no-unused-vars
import { FaLock } from "react-icons/fa"; // Import Icon
import { API_Call } from "../../../core/Keys/variables.keys"; // Import APi Caller
import { useNavigate } from "react-router-dom"; // import useNavigate

// import ChakraUI
import { Input, Button } from "@chakra-ui/react"; // ChakraUI Input

// Import Notifier
import NotifyModal from "../../Modals/Notification"; // NotifyModal

// Main component
export default function LoginBox() {
  const Notify = document.getElementById("StatusModal"); // Get the Modal
  const Navigate = useNavigate(); // Initialize useNavigate

  // States
  const [Password, setPassword] = React.useState({
    ADMIN_PASSWORD: "",
  });

  const [Notification, setNotification] = React.useState({
    Title: "",
    Message: "",
    CloseButtonFunction: () => {
      console.log("Noting");
    },
  });

  // Onchange handlers
  const onchange = (event) => {
    event.preventDefault(); // prevent default
    setPassword({
      ...Password,
      [event.target.name]: event.target.value,
    });
  };

  // Submit handler
  const OnSubmit = async (event) => {
    event.preventDefault(); // prevent default

    // Check if blank
    if (Password.ADMIN_PASSWORD === "") {
      setNotification({
        Title: "Invalid Password",
        Message: "Please enter a valid password",
        CloseButtonFunction: () => {},
      });
      return Notify.showModal(); // Show modal
    }

    // Call The API
    const Response = await API_Call.Post("/post/AdminAuth/login", Password); // Call the API

    if (Response.statusCode === 200) {
      setNotification({
        Title: "Login Successful",
        Message: "You have successfully logged in as an admin user to admin panel",
        CloseButtonFunction: () => {
          Navigate("/");
        },
      });

      return Notify.showModal(); // Show modal
    }

    setNotification({
      Title: Response.Title,
      Message: Response.message,
      CloseButtonFunction: () => {},
    });

    return Notify.showModal(); // Show modal
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
          onClick={OnSubmit}
          colorScheme="facebook"
          className="ml-[4.75rem] lg:ml-[39.5rem]"
        >
          {" "}
          Login Now
        </Button>
      </div>
      <NotifyModal
        Title={Notification.Title}
        Message={Notification.Message}
        CloseButtonFunction={Notification.CloseButtonFunction}
      />
    </>
  );
}
