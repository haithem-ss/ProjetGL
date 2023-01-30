import {
    TabPanel,
    TabPanels,
    TabList,
    Tab,
    Tabs,
    Container,
    Flex,
    Button
} from '@chakra-ui/react'
import {AddIcon} from '@chakra-ui/icons'
import CardsContainer from '../Components/CardsContainer'
import Chat from '../Components/Chat'
import useCours from '../Hooks/UseCours'
import Navbar from "../Components/Navbar/Navbar"
import UseAuteurCourses from '../Hooks/UseAuteurCourses'
import Footer from "../profil enseignant/Footer"

export default function () {
    const userId = JSON.parse(localStorage.getItem("userData")).id
    let data = UseAuteurCourses(userId);
    return <>
        <Navbar />
        <Container maxW="90vw" margin="2rem auto" minH="100vh">

            <Tabs variant='unstyled' padding="0" marginTop="14vh">
                <Flex justify="space-between">
                    <TabList gap={1}>
                        <Tab borderRadius={0} _hover={{ borderColor: "#343A40" }} _selected={{ color: 'white', bg: '#343A40' }} outline="0px">Anouncements</Tab>
                        <Tab borderRadius={0} _hover={{ borderColor: "#343A40 " }} _selected={{ color: 'white', bg: '#343A40' }} outline="0px">Messages</Tab>
                    </TabList>
                    <Button
                        leftIcon={<AddIcon />}
                        onClick={() => ApplyFilters()}
                        bg='#FFF84B'
                        borderRadius="0"
                        color="#212529"
                        border="2px solid #FFF84B"
                        _hover={{
                            border: "2px solid black",
                        }}
                        _active={{
                            outline: "none"
                        }}
                    >
                        New Anouncement </Button>
                </Flex>
                <TabPanels padding="0">
                    <TabPanel>
                        <CardsContainer variant={0} data={data} />

                    </TabPanel>
                    <TabPanel>
                        <Chat />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
        <Footer/> 
    </>
}