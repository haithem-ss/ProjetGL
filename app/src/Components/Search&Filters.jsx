import {
    Button,
    Flex,
    Select,
    Box,
    Input,
    Center
} from '@chakra-ui/react'

const DropDown = ({ Value }) => (
    <Select placeholder={Value} borderRadius="0" width="fit-content">
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
    </Select>
)

export default function () {
    return <Center margin="6rem 0">
        <Box width="80%">
            <Flex gap={2} margin="1rem 0">
                <Input placeholder="Search For Courses, Teachers, Schools ..." borderRadius="0" />
                <Button
                    bg='#FFF84B'
                    borderRadius="0"
                    color="#212529"
                    _hover={{
                        border:"2px solid black"
                    }}
                    _active={{
                        outline:"none"
                    }}
                    >
                    Search</Button>
            </Flex>
            <Flex gap={2} margin="1rem 0">
                <DropDown Value="Level" />
                <DropDown Value="All courses" />
                <DropDown Value="Wilaya" />
                <DropDown Value="Commune" />
                <DropDown Value="Date" />
            </Flex>

        </Box>
    </Center>
}