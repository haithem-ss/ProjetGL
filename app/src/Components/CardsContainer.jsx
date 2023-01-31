import {
    Button,
    Heading,
    Center,
    Box,
    Flex,
    Text,
    Spinner,
    Container
} from '@chakra-ui/react'
import React from "react"
import AnnonceCard from './AnnonceCard'
export default function ({ title, buttonVariant, data }) {
    const [loading, setLoading] = React.useState(false)
    const [courser, setCourses] = React.useState(data)
    React.useEffect(() => {
        setLoading(true)
        setTimeout(()=>{
            console.log(data)
            setCourses(data)
        },1300)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [data])

    const initChat=()=>{
        RequestManager.post("chat/conversations/",{
            user1:CourseInfos.auteur.id,
            user2:userInfos.id})
            .then((res)=>{
                    console.log(res.data)
                    navigate("/MyAnouncements")
            })
            .catch((err)=>console.log(err))
        }
    return <Box  margin="1rem 0rem" justifyContent="center" alignItems="center">

        <Heading fontSize="2xl" >
            {title}
        </Heading>
        <Box display="grid"  minH="70vh" gridColumnGap="40px" gridRowGap="40px" gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]} margin="1rem auto" >
            {courser != null && courser.length != 0 ? <>
                {courser.map((item) => (
                    <AnnonceCard infos={item} />
                ))}
            </> : <>
                <Box></Box>
                {loading === true ? <Box height="100%" display={"flex"} alignItems="center" justifyContent="center"><Spinner margin="auto" color='blue.500' size='xl' thickness='4px' /></Box> :
                    <Box height="100%" display={"flex"} alignItems="center" justifyContent="center" ><Text fontSize="2xl" fontWeight={600} width="100%" margin="auto" textAlign="center">No results found</Text></Box>
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



    </Box>
}