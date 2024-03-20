/* eslint-disable no-unused-vars */
import React from "react"; // Import React
import { useSelector } from "react-redux"; // Import Redux  Hook
import { useNavigate } from "react-router-dom"; // import useNavigate

// Import Component
import MainText from "../Header/HeaderText"; // Main Text
import NotificationModal from "../Modals/Notification"; // Notification Modal
import { API_Call } from "../../core/Keys/variables.keys"; // API Caller

// Main Component
export default function ContactForm() {
  const Notify = document.getElementById("StatusModal"); // Get the Modal
  const Navigate = useNavigate(); // Initialize useNavigate

  // Redux States
  const ReduxStates = useSelector((state) => state); // Get the Redux States

  // States
  const [RequestData, setRequestData] = React.useState({
    RequestTitle: "",
    RequestDescription: "",
    Email: "",
    sessionid: ReduxStates.GuestUsers.JWT,
  });

  const [NotificationStates, setNotificationStates] = React.useState({
    Title: "",
    Message: "",
    ButtonText: "",
    CloseButtonFunction: () => {},
  });

  // Handle Change
  const handleChange = (e) => {
    setRequestData({
      ...RequestData,
      [e.target.name]: e.target.value,
    });
  };

  // handle Submit
  const SendRequest = async () => {
    // Check if the Email is Valid
    if (RequestData.Email === "" || RequestData.Email.includes("@") == false) {
      setNotificationStates({
        Title: "Invalid Email",
        Message: "Please enter a valid email address to send your request",
        ButtonText: "Close",
        CloseButtonFunction: () => {
          console.log("Please enter a valid email address");
        },
      });
      return Notify.showModal(); // Show Notification
    }

    // Check if the Request Title is Valid
    if (RequestData.RequestTitle === "") {
      setNotificationStates({
        Title: "Invalid Request Title",
        Message: "Please enter a valid Request Title",
        ButtonText: "Close",
        CloseButtonFunction: () => {},
      });
      return Notify.showModal(); // Show Notification
    }

    // Check if the Request Description is Valid
    if (RequestData.RequestDescription === "") {
      // Set Notification States
      setNotificationStates({
        Title: "Invalid Request Description",
        Message: "Please Enter a Valid Description",
        ButtonText: "Close",
        CloseButtonFunction: () => {},
      });
      return Notify.showModal(); // Show Notification
    }

    // Send the Request
    const Response = await API_Call.Post(
      "/post/request/CreateNewRequest",
      RequestData,
      {
        "Content-Type": "application/json",
      }
    ); // Send the Request

    if (Response.statusCode === 200) {
      // Set Notification States
      setNotificationStates({
        Title: Response.Title,
        Message: Response.message,
        ButtonText: "Go Back",
        CloseButtonFunction: () => {
          Navigate("/"); // Navigate to Home
        },
      });
    } else {
      // Set Notification States
      setNotificationStates({
        Title: Response.Title,
        Message: Response.message,
        CloseButtonFunction: () => {
          console.log(Response.message);
        },
      });
    }
    Notify.showModal(); // Show Notification
  };
  return (
    <>
      <MainText Text="Contact US" />
      <div className="card w-80 bg-base-100 shadow-xl my-5 ml-[2rem] mr-[2.25rem] lg:w-96 lg:ml-[36rem]">
        <figure className="px-10 lg:pt-10 pt-[6.5rem] flex flex-col lg:space-y-9 space-y-11">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              name="Email"
              value={RequestData.Email}
              onChange={handleChange}
              className="grow"
              placeholder="Email"
            />
          </label>
          <input
            type="text"
            name="RequestTitle"
            value={RequestData.RequestTitle}
            onChange={handleChange}
            placeholder="Enter Title for this Request"
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <input
            type="text"
            name="RequestDescription"
            value={RequestData.RequestDescription}
            onChange={handleChange}
            placeholder="Describe all things here..."
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </figure>
        <div className="card-body items-center text-center">
          <div className="card-actions">
            <button
              onClick={SendRequest}
              className="btn btn-circle btn-lg bg-zinc-950 text-white hover:bg-zinc-950"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <NotificationModal
        Title={NotificationStates.Title}
        Message={NotificationStates.Message}
        ButtonText={NotificationStates.ButtonText}
        ButtonFunction={NotificationStates.CloseButtonFunction}
      />
    </>
  );
}
