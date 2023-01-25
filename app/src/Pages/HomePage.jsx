import SearchFilters from "../Components/Search&Filters";
import CardsContainer from "../Components/CardsContainer";
import ModulesSlider from '../Components/ModulesSlider'


export default function(){
    return <>
    <ModulesSlider/>
    <SearchFilters/>
    <CardsContainer title="Most Popular" buttonVariant={1}/>

    </>
}