import {
    TabPanel,
    TabPanels,
    TabList,
    Tab,
    Tabs,
} from '@chakra-ui/react'
import CardsContainer from '../Components/CardsContainer'
import Chat from '../Components/Chat'
import useCours from '../Hooks/UseCours'


export default function () {
    let data = useCours();

    return <>
        <Tabs variant='unstyled' padding="0">
            <TabList gap={1}>
                <Tab borderRadius={0} _hover={{borderColor:"#343A40"}} _selected={{ color: 'white', bg: '#343A40' }} outline="0px">Anouncements</Tab>
                <Tab borderRadius={0} _hover={{borderColor:"#343A40 "}} _selected={{ color: 'white', bg: '#343A40' }} outline="0px">Messages</Tab>
            </TabList>
            <TabPanels padding="0">
                <TabPanel>
                    <CardsContainer variant={0} data={data} />
                </TabPanel>
                <TabPanel>
                    <Chat/>
                </TabPanel>
            </TabPanels>
        </Tabs>

    </>
}