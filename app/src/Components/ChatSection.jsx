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
    Spinner ,
    useToast,
    IconButton,
} from '@chakra-ui/react'
import React from 'react'
import UseMessages from '../Hooks/UseMessages'

const DateMessages = ({ dte }) => {

    return <Text margin="10px" color="#6C757D" fontSize="xs" textAlign="center" >
        {dte}
    </Text>
}
const MessageBubble = ({ ref ,text, sender }) => {
    return <Flex  maxW="70%" direction={sender ? "row-reverse" : "row"} margin="5px 0px" marginLeft={sender ? "30%" : "0"}>
        <Avatar name='Dan Abrahmov' margin="0 0.75rem" src='https://bit.ly/dan-abramov' />
        <Text maxW="70%" fontSize="md" fontWeight={500} padding="0.5rem 0.75rem 0.5rem 0.75rem" borderRadius={10} bg={sender ? "#343A40" : "#F8F9FA"} color={sender ? "white" : "#495057"}>
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
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
            <Heading size="sm" fontWeight="700">{currentChat.user2.nom + " "+ currentChat.user2.prenom}</Heading>
        </Flex>
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<svg width="15" height="6" viewBox="0 0 26 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="23" cy="3" r="3" fill="#ADB5BD" />
                    <circle cx="13" cy="3" r="3" fill="#ADB5BD" />
                    <circle cx="3" cy="3" r="3" fill="#ADB5BD" />
                </svg>
                }
                variant='outline'
                borderRadius={0} border="0" _hover={{ borderColor: "#343A40 " }} _active={{}} outline="0px"
            />
            <MenuList>
                <MenuItem borderRadius={0} border="0" _hover={{ borderColor: "white ", border: "0px", outline: 0 }} _active={{ borderColor: "white ", border: "0px", outline: 0 }} outline="0px">See profile</MenuItem>
                <MenuItem borderRadius={0} border="0" _hover={{ borderColor: "white ", border: "0px", outline: 0 }} _active={{ borderColor: "white ", border: "0px", outline: 0 }} outline="0px">Delete chat</MenuItem>
                <MenuItem borderRadius={0} border="0" _hover={{ borderColor: "white ", border: "0px", outline: 0 }} _active={{ borderColor: "white ", border: "0px", outline: 0 }} outline="0px">Report</MenuItem>

            </MenuList>
        </Menu>
    </Flex>
}
const MessagesSection = ({ NewMessages,currentChat,senderID }) => {
    let Messages=UseMessages(currentChat)
    React.useEffect(()=>{
    },[NewMessages,Messages])

    return <Box
        id="MessagesSection"
        height="100%"
        overflowY="hidden"
        flexDirection="column"
        justifyContent="flex-start"
        width="100%"
        paddingLeft="0px"
        gap={6}
        display="flex"
        
    >
              <ScrollableFeed >
                {/* {Messages!=[] ?
              <DateMessages dte={Date(Messages[0].dateTimeMessage).toDateString()}></DateMessages>
            :<></>} */}
        {Messages.map((item) => (
            <>
     <DateMessages dte={item.dateTimeMessage}></DateMessages>
{
    item.messages.map((mes)=>(
        <MessageBubble text={mes.message} sender={mes.sender===senderID} />

    ))
}
        </>)
        )}
        {NewMessages.map((item) => (<MessageBubble text={item.message} sender={item.sender===senderID}  />))}
          </ScrollableFeed>

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

export default function ({currentChat }) {
    const [socket, setSocket] = React.useState(null);
    const [loading,setLoading]=React.useState(false)
    const [NewMessages,setNewMessages]=React.useState([])
    let toast=useToast()
    React.useEffect(() => {
        if (currentChat!=null) {
            setLoading(true)
            const socket = new WebSocket('ws://localhost:8000/chat/' + currentChat.id + "/");
            socket.onopen = (e) => {
                toast({
                    title: 'Connected successfully',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: 'bottom-right',
                })
            }
            socket.onmessage = (event) => {
                setNewMessages(messages => [...messages, JSON.parse(event.data)])
            };
            socket.onclose = (event) => {
                console.log(event);
            };
            setSocket(socket);
            setTimeout(()=>{
                setLoading(false)

            },1500)
            // Cleanup function to close the socket when component unmounts
            return () => socket.close();
        }
    }, [currentChat]);
    const AddMessage = (message) => {
        socket.send(JSON.stringify({
            message: message,
            sender: currentChat.user1.id,
            receiver: currentChat.user2.id
        }));
    }
    return <>
        <Flex width="100%" direction="column" justify="space-between" height="100%" >
            
            {loading ? <Spinner margin="auto"  color='blue.500' size='xl' thickness='4px' /> :
                       <> {currentChat === null ?
                            <Heading size="md" height="100%" textAlign="center" marginTop="45%">Please select conversation</Heading>
                            :
                            <>
                                <TopBar currentChat={currentChat} />
                                <MessagesSection NewMessages={NewMessages} currentChat={currentChat} senderID={currentChat.user1.id} />
                                <BottomBar NewMessage={AddMessage} />
                            </>
            
                        }</> }

        </Flex>
    </>
  );
}
