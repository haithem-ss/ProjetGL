import {
    Button,
    Heading,
    Center,
    Box,
    Flex,
    Text,
    Spinner,
} from '@chakra-ui/react'
import React from "react"
import AnnonceCard from './AnnonceCard'
export default function ({ title, buttonVariant, data }) {
    const [loading, setLoading] = React.useState(false)
    const [courser, setCourses] = React.useState(data)
    React.useEffect(() => {
        setLoading(true)
        setTimeout(()=>{
            setCourses(data)
        },700)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [data])
    return < >
        <Heading fontSize="2xl" >
            {title}
        </Heading>
        <Box display="grid" gridColumnGap="40px" gridRowGap="40px" gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]} margin="1rem auto" >
            {courser != null && courser.length != 0 ? <>
                {courser.map((item) => (
                    <AnnonceCard infos={item} />
                ))}
            </> : <>
                <Box></Box>
                {loading === true ? <Flex height={300} align="center" justify="center"><Spinner margin="auto" color='blue.500' size='xl' thickness='4px' /></Flex> :
                    <Flex height={300} ><Text fontSize="2xl" fontWeight={600} width="100%" margin="auto" textAlign="center">No results found</Text></Flex>
                }
            </>}



        </Box>
        {courser != null && courser.length != 0 ? <>
            {buttonVariant === 1 ? <Center marginTop="4rem">
                <Button
                    bg="#00F07D"
                    margin="auto"
                    borderColor="#00F07D"
                    variant='outline'
                    _hover={{
                        borderColor: "#000"
                    }}
                    borderRadius={0}>
                    See all
                </Button>
            </Center> : null}
            {buttonVariant === 2 ? <Center marginTop="4rem">
                <Button
                    bg="white"
                    margin="auto"
                    borderColor="#212529"
                    variant='outline'
                    _hover={{
                        borderColor: "#212529"
                    }}
                    borderRadius={0}>
                    See all
                </Button>
            </Center> : null}
        </> : null}



    </>
}