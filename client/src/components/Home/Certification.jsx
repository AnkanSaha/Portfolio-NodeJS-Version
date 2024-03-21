/* eslint-disable no-unused-vars */
import React from "react"; // Import React
import { useSelector } from "react-redux"; // import Redux
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
import { OwnerCertification } from "../../core/Keys/OwnerDetails.keys"; // Import OwnerDetails
import { MdExpandMore, MdExpandLess } from "react-icons/md"; // More Icon

// Import Components
import MainText from "../Header/HeaderText"; // Import MainText component

// Certification component
export default function Certification() {
  // Redux States
  const ReduxState = useSelector((state) => state); // Create Redux States
  console.log(ReduxState);

  // State for the component
  const [MoreCertificateShow, setMoreCertificateShow] = React.useState(false); // State for More Skill Show
  const [CountCertificate, setCountCountCertificate] = React.useState(2); // State for Count of Skill

  // Function for More Skill Show
  const ShowMoreCertificate = (event) => {
    event.preventDefault(); // Prevent Default Event
    setMoreCertificateShow(true); // Set More Skill Show to True
    setCountCountCertificate(OwnerCertification.length); // Set Count of Skill to Length of OwnerSkillsIcons
  };

  const ShowLessCertificate = (event) => {
    event.preventDefault(); // Prevent Default Event
    setMoreCertificateShow(false); // Set More Skill Show to False
    setCountCountCertificate(2); // Set Count of Skill to 2
  };
  return (
    <>
      <MainText Text="Certification" />
      <div className="flex lg:flex-row flex-col flex-wrap">
        {ReduxState.SiteInfo.Certificates.map((Certification, index) => {
          return index <= CountCertificate ? (
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
              />
            </Card>
          ) : null;
        })}
      </div>
      {MoreCertificateShow === false ? (
        <Button
          rightIcon={<MdExpandMore />}
          onClick={ShowMoreCertificate}
          className="text-center my-5 ml-[25%] lg:ml-[41.25rem]"
          colorScheme="teal"
          size="lg"
        >
          View More
        </Button>
      ) : (
        <Button
          rightIcon={<MdExpandLess />}
          onClick={ShowLessCertificate}
          className="text-center my-5 ml-[25%] lg:ml-[41.25rem]"
          colorScheme="teal"
          size="lg"
        >
          View Less
        </Button>
      )}
    </>
  );
}
