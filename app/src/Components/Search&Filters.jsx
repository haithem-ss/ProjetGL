import {
    Button,
    Flex,
    Select,
    Box,
    Input,
    Center
} from '@chakra-ui/react'
import React from 'react'


const DropDown = ({ placeholder, setValue, vals }) => {
    return <Select placeholder={placeholder} onChange={(e) => setValue(e.target.value)} borderRadius="0" width="fit-content" id="1">
        {vals.map((val) => (
            <option value={val}>{val}</option>
        ))}
    </Select>
}

export default function ({ Filters }) {
    let niveaux = ["Primaire", "College", "Lycée", "Université", "Autre"]
    const inputRef = React.useRef()
    const [levelRef, setLevel] = React.useState(null)
    const [dateOrdering, setDateOrdering] = React.useState(null)
    const wilayaRef = React.useRef()
    const CommuneRef = React.useRef()
    const ApplyFilters = () => {
        Filters({ search: inputRef.current.value, niveau: levelRef })
    }
    return <Center margin="6rem 0">
        <Box width="80%">

            <Flex gap={2} margin="1rem 0">
                <Input placeholder="Search For Courses, Teachers, Schools ..." ref={inputRef} borderRadius="0" />
                <Button
                    onClick={() => ApplyFilters()}
                    bg='#FFF84B'
                    borderRadius="0"
                    color="#212529"
                    _hover={{
                        border: "2px solid black"
                    }}
                    _active={{
                        outline: "none"
                    }}
                >
                    Search</Button>
            </Flex>
            <Flex gap={2} margin="1rem 0">
                <DropDown setValue={(x) => setLevel(x)} placeholder="Level" vals={niveaux} />
                <DropDown ref={wilayaRef} placeholder="Wilaya" vals={niveaux} />
                <DropDown ref={CommuneRef} placeholder="Commune" vals={niveaux} />
                <Select placeholder="Date" onChange={(e) => setDateOrdering(e.target.value)} borderRadius="0" width="fit-content" id="1">
                        <option value="date">Ascending order</option>
                        <option value="-date">Descending order</option>
                </Select>
            </Flex>

        </Box>
    </Center>
}