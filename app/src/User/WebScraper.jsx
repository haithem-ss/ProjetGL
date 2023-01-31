import {
  Stack,
  Box,
  Link,
  Button,
  WrapItem,
  Avatar,
  Text,
  Input,
  Textarea as ChakraTextarea,
} from "@chakra-ui/react";
import Vector from "../User/assets/WebScraper.png";
import Modal from "./Modal";

const WebScraper = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      marginTop={50}
    >
      <img src={Vector} alt="web scarping" />
      <Text
        fontSize={"1rem"}
        color={"#495057"}
        fontWeight={400}
        marginTop={20}
        width={"300px"}
        textAlign={"center"}
      >
        Start Retreiving the courses from other websites
      </Text>

      <Modal />
    </Box>
  );
};

export default WebScraper;
