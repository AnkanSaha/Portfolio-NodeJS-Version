/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react"; // Import React Library
import MainText from "../Header/HeaderText"; // Import the Main Text
import { API_Call } from "../../core/Keys/variables.keys"; // Import API Caller
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react"; // Import Chakra UI Components

// Main Component

// Import Redux
import { useSelector, useDispatch } from "react-redux"; // Import the useSelector Hook
import {
  ModifyIsLoading,
  ModifyIPDetails,
} from "../../core/Redux/Slices/Guest Users"; // Import the Redux Slice
export default function IPDetails() {
  // Redux State
  const ReduxState = useSelector((state) => state); // State
  const dispatch = useDispatch(); // Dispatch
  console.log(ReduxState.GuestUsers);

  // Import The IP Address Details
  React.useEffect(() => {
    if (ReduxState.GuestUsers.IP_Details === null) {
      GetIPInfo();
    }
  }, []);

  // Function for the API Call
  const GetIPInfo = () => {
    if (ReduxState.GuestUsers.IsLoading === false) {
      dispatch(ModifyIsLoading(true)); // Modify the IsLoading State
      API_Call.Get(
        `/get/general/get-ip-details/?sessionid=${ReduxState.GuestUsers.JWT}`
      ).then((data) => {
        console.log(data);
        dispatch(ModifyIPDetails(data.data));
        dispatch(ModifyIsLoading(false)); // Modify the IsLoading State
      });
    }
  };
  return (
    <>
      <MainText Text="Current IP Details" />
      <Card className="mx-5 my-5">
        <CardHeader>
          <Heading size="md">IP Address Report</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Overview
              </Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your clients.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Analysis
              </Heading>
              <Text pt="2" fontSize="sm">
                See a detailed analysis of all your business clients.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
