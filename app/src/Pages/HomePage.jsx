import SearchFilters from "../Components/Search&Filters";
import CardsContainer from "../Components/CardsContainer";
import ModulesSlider from '../Components/ModulesSlider'
import Navbar from '../Components/Navbar/Navbar'
import TOP from '../Components/Landing/Top'
import {Container} from "@chakra-ui/react"
import UnderNavbar from '../Components/Navbar/underNavPattern'
import useCours from '../Hooks/UseCours'
import React from 'react'


export default function () {
    const [filters, setFilters] = React.useState({})
    let data = useCours(filters);
    return <>
        <Navbar/>
        <TOP/>
        <UnderNavbar/>
        <Container maxW="90vw" margin="2rem auto" >
        <ModulesSlider />
        <SearchFilters Filters={(newFilter) => setFilters(newFilter)} />
        <CardsContainer title="Most Popular" buttonVariant={1} data={data} />
    </Container>
    </>
}