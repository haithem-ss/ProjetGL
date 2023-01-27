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
import Vector from "./assets/Vector.png";
export const LinksDiv = ({ currentClass }) => {
  return (
    <Stack
      marginTop={10}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"baseline"}
      justifyContent={"center"}
      gap={20}
    >
      <Link
        height={"30px"}
        width={"150px"}
        href="/user"
        fontSize={"0.875rem"}
        background={currentClass === "General" ? "#343A40" : "#F8F9FA"}
        color={currentClass === "General" ? "white" : "black"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        _hover={{
          background: currentClass === "General" ? "#343A40" : "#F8F9FA",
          color: currentClass === "General" ? "white" : "black",
        }}
        _active={{
          background: currentClass === "General" ? "#343A40" : "#F8F9FA",
          color: currentClass === "General" ? "white" : "black",
        }}
        _focus={{
          background: currentClass === "General" ? "#343A40" : "#F8F9FA",
          color: currentClass === "General" ? "white" : "black",
        }}
      >
        General
      </Link>
      <Link
        fontSize={"0.875rem"}
        width={"150px"}
        height={"30px"}
        href="/user/security"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        background={currentClass === "security" ? "#343A40" : "#F8F9FA"}
        color={currentClass === "security" ? "white" : "black"}
        _hover={{
          background: currentClass === "security" ? "#343A40" : "#F8F9FA",
          color: currentClass === "security" ? "white" : "black",
        }}
        _active={{
          background: currentClass === "security" ? "#343A40" : "#F8F9FA",
          color: currentClass === "security" ? "white" : "black",
        }}
        _focus={{
          background: currentClass === "security" ? "#343A40" : "#F8F9FA",
          color: currentClass === "security" ? "white" : "black",
        }}
        outline={"1px solid #CED4DA"}
      >
        Security
      </Link>
    </Stack>
  );
};

const ImageDiv = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      marginTop={4}
      marginBottom={50}
    >
      <WrapItem
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        marginRight={4}
      >
        <Avatar
          width={"150px"}
          height={"150px"}
          borderRadius={"50%"}
          name="Segun Adebayo"
          src="https://bit.ly/sage-adebayo"
        />{" "}
      </WrapItem>
      <Button
        height={"30px"}
        width={"160px"}
        border={"1px solid #CED4DA"}
        background={"#F8F9FA"}
        borderRadius={"0.25rem"}
        color={"#6C757D"}
        _hover={{
          background: "#F8F9FA",
          color: "#6C757D",
        }}
        _active={{
          background: "#F8F9FA",
          color: "#6C757D",
        }}
        _focus={{
          background: "#F8F9FA",
          color: "#6C757D",
        }}
        fontSize={"0.75rem"}
      >
        <img
          height={"10px"}
          width={"10px"}
          src={Vector}
          alt="Vector"
          style={{
            marginRight: "5px",
          }}
        />
        Change Picture
      </Button>
    </Box>
  );
};

const UserSuppFields = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} marginTop={4}>
      <Text
        fontSize={"1.25rem"}
        color={"#495057"}
        textTransform={"capitalize"}
        fontWeight={700}
        marginTop={4}
      >
        Phone Number
      </Text>{" "}
      <Input
        placeholder="Phone number..."
        width={"300px"}
        height={"30px"}
        fontSize={"0.75rem"}
        marginTop={2}
      />
      <Text
        fontSize={"1.25rem"}
        color={"#495057"}
        textTransform={"capitalize"}
        fontWeight={700}
        marginTop={4}
      >
        Address
      </Text>
      <Input
        placeholder="Address..."
        width={"300px"}
        height={"30px"}
        fontSize={"0.75rem"}
        marginTop={2}
      />
      <Text
        fontSize={"1.25rem"}
        color={"#495057"}
        textTransform={"capitalize"}
        fontWeight={700}
        marginTop={4}
      >
        Bio
      </Text>
      <ChakraTextarea
        placeholder="Bio..."
        width={"300px"}
        height={"165px"}
        fontSize={"0.75rem"}
        marginTop={2}
        resize={"none"}
      />
    </Box>
  );
};

const UserField = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} mt={50}>
      <Text
        fontSize={"1.25rem"}
        color={"#495057"}
        textTransform={"capitalize"}
        fontWeight={700}
      >
        First Name
      </Text>
      <Input
        placeholder="First name..."
        width={"300px"}
        height={"30px"}
        fontSize={"0.75rem"}
        marginTop={2}
      />
      <Text
        fontSize={"1.25rem"}
        color={"#495057"}
        textTransform={"capitalize"}
        fontWeight={700}
        marginTop={4}
      >
        Last Name
      </Text>
      <Input
        placeholder="Last name..."
        width={"300px"}
        height={"30px"}
        fontSize={"0.75rem"}
        marginTop={2}
      />
    </Box>
  );
};

const UserFieldsPage = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      marginTop={4}
      width={"100vw"}
    >
      <LinksDiv currentClass={"General"} />
      <Box
        display={"flex"}
        flexDirection={{
          base: "column",
          md: "row",
        }}
        alignItems={"flex-start"}
        marginTop={4}
        gap={50}
      >
        <Stack className="left" direction="column" spacing={4} marginTop={10}>
          <ImageDiv />
          <UserField />
        </Stack>
        <Stack className="right" direction="column" spacing={4} marginTop={10}>
          <UserSuppFields />
        </Stack>
      </Box>
    </Box>
  );
};

export default UserFieldsPage;
