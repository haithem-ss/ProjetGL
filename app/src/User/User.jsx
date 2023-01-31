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
import Navbar from '../components/Navbar/Navbar'
import Footer from '../profil enseignant/Footer'
import UserFieldsPage from './UserFieldsPage'
import SecurityPage from './SecurityPage'



export default function (){
return(
<>
<Navbar/>
    <Container maxW="90vw" margin="2rem auto" minH="100vh">

    <Tabs variant='unstyled' padding="0" marginTop="14vh">
        <Flex justify="space-between">
            <TabList gap={1}>
                <Tab borderRadius={0} _hover={{ borderColor: "#343A40" }} _selected={{ color: 'white', bg: '#343A40' }} outline="0px">Informations</Tab>
                <Tab borderRadius={0} _hover={{ borderColor: "#343A40 " }} _selected={{ color: 'white', bg: '#343A40' }} outline="0px">Security</Tab>
            </TabList>

        </Flex>
        <TabPanels padding="0">
            <TabPanel>
                <UserFieldsPage/>
            </TabPanel>
            <TabPanel>
                <SecurityPage/>
            </TabPanel>
        </TabPanels>
    </Tabs>
</Container>
<Footer/>
</>
)
    
}