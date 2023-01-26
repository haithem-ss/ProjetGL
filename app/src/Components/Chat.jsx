import {
    Button,
    Flex,
    Text,
    Box,
    Heading,
    Avatar,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    IconButton,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import ChatSection from './ChatSection'
import React from 'react'



const HistoryItem = ({ name, lastMessage,openChat }) => {
    return <Flex
    onClick={()=>openChat()}
        borderBottom="1px solid #CED4DA"
        padding=" 0.75rem 0rem 0.75rem 0.75rem "
        align="center"
        gap={4}
        justify="space-between"
        cursor="pointer"
    >
        <Flex
        align="center"
        gap={3}
        >
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
            <Box>
                <Heading size="sm" fontWeight="700">{name}
                </Heading>
                <Text fontSize="sm" color="#6C757D" fontWeight="500">{lastMessage}</Text>
            </Box>
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

export default function () {
    const History = [
        { contact: "SAIDA Haithem", lastMessage: "How are you ?" },
        { contact: "ATTAR y bilal", lastMessage: "Can you help me please ?" },
        { contact: "BENAFIA Djamel", lastMessage: "See you there" },
    ]
    const [currentChat, setCurrentChat] = React.useState(null)

    return <>
        <Flex gap={6} width="100%"
        >
            <Box width="50%" border="1px" height="79vh" borderColor="#CED4DA" overflowY="scroll"
                __css={{
                    '&::-webkit-scrollbar': {
                        w: '2',
                    },
                    '&::-webkit-scrollbar-track': {
                        w: '6',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        bg: `gray.100`,
                    },
                }}>
                {
                    History.map((conversation) => (<HistoryItem 
                        openChat={()=>{
                            setCurrentChat(conversation)
                        }}
                        name={conversation.contact} 
                        lastMessage={conversation.lastMessage} />))
                }
            </Box>
            <Box width="50%" border="1px" height="79vh" borderColor="#CED4DA">
                <ChatSection currentChat={currentChat} />
            </Box>
        </Flex>

    </>
}