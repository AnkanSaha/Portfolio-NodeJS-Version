import React from "react"; // eslint-disable-line no-unused-vars
import { FaLock } from "react-icons/fa"; // Import Icon
import {useDispatch} from 'react-redux'; // import useDispatch from react-redux

// Import Redux State
import {ModifyIsLoading} from '../../../core/Redux/Slices/Guest Users'; // Redux Slices

// import ChakraUI
import { Input, Button } from "@chakra-ui/react"; // ChakraUI Input

// Import Notifier
import NotifyModal from '../../Modals/Notification'; // NotifyModal

// Main component
export default function LoginBox() {
  // Redux
  const dispatcher = useDispatch(); // useDispatch

  // States
  const [Password, setPassword] = React.useState({
    ADMIN_PASSWORD: "",
  });

  const [Notification, setNotification] = React.useState({
    Title: "",
    Message: "",
    CloseButtonFunction: () => {
      console.log('Noting')
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
  const OnSubmit = (event) => {
    event.preventDefault(); // prevent default
    // Check if blank
    if(Password.ADMIN_PASSWORD === ''){
      alert('Password is required');
      return;
    }
  }
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
          className="ml-[5.25rem] lg:ml-[39.5rem]"
        >
          {" "}
          Login Now
        </Button>
      </div>
      <NotifyModal Title={Notification.Title} Message={Notification.Message} CloseButtonFunction={Notification.CloseButtonFunction} />
    </>
  );
}
