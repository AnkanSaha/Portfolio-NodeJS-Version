/* eslint-disable no-unused-vars */
import React from "react"; // Import React
import {
  Box,
  Flex,
  Avatar,
  Heading,
  Text,
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react"; // Import Chakra UI components
import {
  OwnerPicture,
  OwnerName,
  OwnerCertification,
} from "../../core/Keys/OwnerDetails.keys"; // Import OwnerDetails

// Certification component
export default function Certification() {
  return (
    <>
      <h1 className="my-[3.25rem] lg:my-[4.25rem] text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className=" text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Certification
        </span>{" "}
      </h1>

      <div className='flex lg:flex-row flex-col flex-wrap'>
        {OwnerCertification.map((Certification) => {
          return (
            <Card
              key={Certification.CourseName}
              maxW="md"
              className="mx-3 my-5 lg:mx-5 w-auto"
            >
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name={Certification.CourseName}
                      src={Certification.Icons}
                    />

                    <Box>
                      <Heading size="sm">{Certification.CourseName}</Heading>

                      <Text>
                        <strong>Issued By : </strong>
                        {Certification.Issuer}
                      </Text>
                      <Text>
                        {" "}
                        <strong> Issue Date: </strong> {Certification.IssueDate}
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardHeader>
              <CardBody>
                <Text>{Certification.description}</Text>
              </CardBody>

              <Button
                onClick={() => {
                  window.open(Certification.Details_URL);
                }}
                colorScheme="facebook"
                className="right-5 m-auto"
              >
                View Details
              </Button>

              <CardFooter
                justify="space-between"
                flexWrap="wrap"
                sx={{
                  "& > button": {
                    minW: "136px",
                  },
                }}
              ></CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
}
