import SearchFilters from "../Components/Search&Filters";
import CardsContainer from "../Components/CardsContainer";
import ModulesSlider from '../Components/ModulesSlider'
import useCours from '../Hooks/UseCours'
import React from 'react'


export default function () {
    const [filters, setFilters] = React.useState({})
    let data = useCours(filters);
    return <>
        <ModulesSlider />
        <SearchFilters Filters={(newFilter) => setFilters(newFilter)} />
        <CardsContainer title="Most Popular" buttonVariant={1} data={data} />

    </>
}