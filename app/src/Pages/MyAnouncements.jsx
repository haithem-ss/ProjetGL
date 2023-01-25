import {
    TabPanel,
    TabPanels,
    TabList,
    Tab,
    Tabs,
} from '@chakra-ui/react'
import CardsContainer from '../Components/CardsContainer'
import Chat from '../Components/Chat'


export default function () {
    return <>
        <Tabs variant='unstyled'>
            <TabList gap={1}>
                {/* <Tab borderRadius={0} _hover={{borderColor:"#343A40"}} _selected={{ color: 'white', bg: '#343A40' }} outline="0px">Anouncements</Tab> */}
                <Tab borderRadius={0} _hover={{borderColor:"#343A40 "}} _selected={{ color: 'white', bg: '#343A40' }} outline="0px">Messages</Tab>
            </TabList>
            <TabPanels>
                {/* <TabPanel>
                    <CardsContainer variant={0} />
                </TabPanel> */}
                <TabPanel>
                    <Chat/>
                </TabPanel>
            </TabPanels>
        </Tabs>

    </>
}