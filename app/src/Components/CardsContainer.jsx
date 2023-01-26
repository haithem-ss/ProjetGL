import {
    Button,
    Heading,
    Center,
    Box,
    Container
} from '@chakra-ui/react'
import AnnonceCard from './AnnonceCard'
export default function ({
    title,
    buttonVariant
}) {
    return < >
        <Heading fontSize="2xl" >
            {title}
        </Heading>
        <Box display="grid" gridColumnGap="40px" gridRowGap="40px" gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]} margin="1rem auto" >
            <AnnonceCard />
            <AnnonceCard />
            <AnnonceCard />
            <AnnonceCard />
            <AnnonceCard />
            <AnnonceCard />

        </Box>
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
                    {buttonVariant===2 ? <Center marginTop="4rem">
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
        </Center>:null}


    </>
}