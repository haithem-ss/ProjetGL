import Navbar from '../Components/Navbar/Navbar'
import CardsContainer from '../Components/CardsContainer';
import useFavourites from '../Hooks/useFavourites';
import {Container,Box} from "@chakra-ui/react"
export default function () {
    const userId = JSON.parse(localStorage.getItem("userData")).id
    let data = useFavourites(userId);
    return <>
        <Navbar />
        <Container maxW="90vw" margin="2rem auto" >
            <Box marginTop="14vh"></Box>
            <CardsContainer title="Saved courses" variant={0} data={data} />

        </Container>
    </>
}