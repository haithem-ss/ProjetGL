import {
  Text,
  Flex,
  Input,
  Box,
  Heading,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  Spinner,
  useToast,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import io from "socket.io-client";

const DateMessages = ({ Date }) => {
  return (
    <Text color="#6C757D" fontSize="xs" textAlign="center">
      {Date}
    </Text>
  );
};
const MessageBubble = ({ text, sender }) => {
  return (
    <Flex
      maxW="70%"
      direction={sender ? "row-reverse" : "row"}
      marginLeft={sender ? "30%" : "0"}
    >
      <Avatar
        name="Dan Abrahmov"
        margin="0 0.75rem"
        src="https://bit.ly/dan-abramov"
      />
      <Text
        maxW="70%"
        fontSize="md"
        fontWeight={500}
        padding="0.5rem 0.75rem 0.5rem 0.75rem"
        borderRadius={10}
        bg={sender ? "#343A40" : "#F8F9FA"}
        color={sender ? "white" : "#495057"}
      >
        {text}
      </Text>
    </Flex>
  );
};
const TopBar = ({ currentChat }) => {
  return (
    <Flex
      borderBottom="1px solid #CED4DA"
      padding=" 0.75rem 0rem 0.75rem 0.75rem "
      align="center"
      gap={4}
      justify="space-between"
      width="100%"
    >
      <Flex align="center" gap={3}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Heading size="sm" fontWeight="700">
          {currentChat.contact}
        </Heading>
      </Flex>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={
            <svg
              width="15"
              height="6"
              viewBox="0 0 26 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="23" cy="3" r="3" fill="#ADB5BD" />
              <circle cx="13" cy="3" r="3" fill="#ADB5BD" />
              <circle cx="3" cy="3" r="3" fill="#ADB5BD" />
            </svg>
          }
          variant="outline"
          borderRadius={0}
          border="0"
          _hover={{ borderColor: "#343A40 " }}
          _active={{}}
          outline="0px"
        />
        <MenuList>
          <MenuItem
            borderRadius={0}
            border="0"
            _hover={{ borderColor: "white ", border: "0px", outline: 0 }}
            _active={{ borderColor: "white ", border: "0px", outline: 0 }}
            outline="0px"
          >
            See profile
          </MenuItem>
          <MenuItem
            borderRadius={0}
            border="0"
            _hover={{ borderColor: "white ", border: "0px", outline: 0 }}
            _active={{ borderColor: "white ", border: "0px", outline: 0 }}
            outline="0px"
          >
            Delete chat
          </MenuItem>
          <MenuItem
            borderRadius={0}
            border="0"
            _hover={{ borderColor: "white ", border: "0px", outline: 0 }}
            _active={{ borderColor: "white ", border: "0px", outline: 0 }}
            outline="0px"
          >
            Report
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
const MessagesSection = ({ Messages }) => {
  return (
    <Box
      height="100%"
      padding="0.75rem 0"
      overflowY="scroll"
      flexDirection="column"
      justifyContent="flex-start"
      gap={6}
      display="flex"
      __css={{
        "&::-webkit-scrollbar": {
          w: "2",
        },
        "&::-webkit-scrollbar-track": {
          w: "6",
        },
        "&::-webkit-scrollbar-thumb": {
          bg: `gray.100`,
        },
      }}
    >
      {Messages.map((item) => (
        <MessageBubble text={item} sender={true} />
      ))}
      {/* <DateMessages Date="FRI AT 11:03 AM" />
        <MessageBubble text="Salam Khoya Ma3lish T3awenni ?" sender={false} />
        <MessageBubble text="Juste 3la el course hadek li rak hato fel profil
        ta3k win interassaaani habit n3rf win ra7 yes
        ra et merci w bon courage." sender={false} />
        <DateMessages Date="FRI AT 11:03 AM" />

        <MessageBubble text="Juste 3la el course hadek li rak hato fel profilta3k win interassaaani habit n3rf win ra7 yesra et merci w bon courage." sender={true} />
        <MessageBubble text="lsl mat9l9hach yaamat w n3ytlk" sender={true} /> */}
    </Box>
  );
};
const BottomBar = ({ NewMessage }) => {
  const inputRef = React.useRef(null);
  return (
    <Flex
      borderTop="1px solid #CED4DA"
      padding=" 0.75rem 0.75rem 0.75rem 0.75rem "
      align="center"
      gap={4}
      justify="space-between"
      cursor="pointer"
      width="100%"
    >
      <Input
        focusBorderColor="#ADB5BD"
        borderRadius={0}
        ref={inputRef}
        placeholder="Message"
      />
      <IconButton
        bg="#00F07D"
        _hover={{
          outline: "0",
        }}
        icon={
          <svg
            svg
            width="20"
            height="32"
            viewBox="0 0 38 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 32V19.75L15.1 16L0 12.15V0L38 16L0 32Z" fill="white" />
          </svg>
        }
        onClick={() => {
          NewMessage(inputRef.current.value);
          inputRef.current.value = "";
        }}
      ></IconButton>
    </Flex>
  );
};

export default function ({ currentChat }) {
  const toast = useToast();
  const [socket, setSocket] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    if (currentChat != null) {
      console.log("Loading");
      setLoading(true);
      const socket = new WebSocket(
        "ws://localhost:8000/chat/" + "SAIDABCE" + "/"
      );
      socket.onopen = (e) => {
        toast({
          title: "Connected successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "bottom-right",
        });
      };
      socket.onmessage = (event) => {
        console.log(event.data);
      };
      socket.onclose = (event) => {
        console.log(event);
      };
      setSocket(socket);
      setTimeout(() => {
        setLoading(false);
      }, 700);
      // Cleanup function to close the socket when component unmounts
      return () => socket.close();
    }
  }, [currentChat]);
  const [messages, setMessages] = React.useState([]);
  const AddMessage = (message) => {
    // setMessages(messages => [...messages, message])
    socket.send(
      JSON.stringify({
        message: message,
        sender: "SAIDA Haithem",
        receiver: "BCE KHR",
      })
    );
  };
  return (
    <>
      <Flex
        width="100%"
        direction="column"
        justify="space-between"
        height="100%"
      >
        {loading ? (
          <Spinner margin="auto" color="blue.500" size="xl" thickness="4px" />
        ) : (
          <>
            {" "}
            {currentChat === null ? (
              <Heading
                size="md"
                height="100%"
                textAlign="center"
                marginTop="50%"
              >
                Please select conversation
              </Heading>
            ) : (
              <>
                <TopBar currentChat={currentChat} />
                <MessagesSection Messages={messages} />
                <BottomBar NewMessage={AddMessage} />
              </>
            )}
          </>
        )}
      </Flex>
    </>
  );
}
