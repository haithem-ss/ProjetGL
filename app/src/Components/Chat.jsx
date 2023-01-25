import {
    Button,
    Flex,
    Select,
    Box,
    Input,
    Avatar
} from '@chakra-ui/react'


const HistoryItem = () => {
    return <Box borderBottom="1px solid #CED4DA" padding=" 0.5rem 0rem 0.5rem 0.75rem ">
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
    </Box>
}

export default function () {
    return <>
        <Flex gap={6} width="100%">
            <Box width="50%" border="1px" height="79vh" borderColor="#CED4DA">
                <HistoryItem/>
                <HistoryItem/>
                <HistoryItem/>
                <HistoryItem/>
                <HistoryItem/>
            </Box>
            <Box width="50%" border="1px" height="79vh" borderColor="#CED4DA">
                Chat
            </Box>
        </Flex>

    </>
}