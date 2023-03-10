import {
  Stack,
  Box,
  Link,
  Button,
  Text,
  Input,
  Container,
  Heading,
} from "@chakra-ui/react";
import "./styles/AdminProduct.css";
const SecurityPage = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      height={{
        base: "100vh",
        md: "100vh",
      }}
    >

      <Box
        maxW={"container.xl"}
        width={"900px"}
        // border={"1px solid #E9ECEF"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Text
          fontSize={"1.35rem"}
          color={"#495057"}
          textTransform={"capitalize"}
          fontWeight={500}
          marginTop={20}
        >
          Password Settings{" "}
        </Text>
        <Container
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"250px"}
        >
          <Box
            maxW={"container.lg"}
            display={"flex"}
            flexDirection={"row"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              marginTop={4}
              width={"100vw"}
              padding={20}
            >
              <Text
                fontSize={"1.25rem"}
                color={"#495057"}
                textTransform={"capitalize"}
                fontWeight={500}
                marginTop={4}
              >
                Old password
              </Text>
              <Input
                placeholder="Password..."
                width={"300px"}
                height={"30px"}
                marginTop={10}
                type={"password"}
                fontSize={"0.875rem"}
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              marginTop={4}
              padding={20}
            >
              <Text
                fontSize={"1.25rem"}
                color={"#495057"}
                textTransform={"capitalize"}
                fontWeight={500}
                marginTop={4}
              >
                New password
              </Text>
              <Input
                placeholder="New Password..."
                width={"300px"}
                height={"30px"}
                marginTop={10}
                type={"password"}
                fontSize={"0.875rem"}
              />
              <Text
                fontSize={"1.25rem"}
                color={"#495057"}
                textTransform={"capitalize"}
                fontWeight={500}
                marginTop={10}
              >
                Confirm new password
              </Text>
              <Input
                placeholder="Password..."
                width={"300px"}
                height={"30px"}
                marginTop={10}
                type={"password"}
                fontSize={"0.875rem"}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Button
        height={"40px"}
        backgroundColor={"#00F07D"}
        color={"black"}
        width={"200px"}
        mt={10}
        borderRadius={"0px"}
        _hover={{
          backgroundColor: "#00F07D",
          color: "black",
          outline: "none",
          border: "none",
        }}
        _active={{
          backgroundColor: "#00F07D",
          color: "black",
          outline: "none",
          border: "none",
        }}
        _focus={{
          backgroundColor: "#00F07D",
          color: "black",
          outline: "none",
          border: "none",
        }}
      >
        Save
      </Button>
    </Box>
  );
};

export default SecurityPage;
