import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";


const Filters = (props) =>{

    return(
        <>
        <FilterByName handleFilterName={props.handleFilterName} filterByName={props.filterByName}/>
        <FilterBySpecies handleFilterSpecies={props.handleFilterSpecies} filterBySpecies={props.filterBySpecies}/>
        </>
    )
};

export default Filters;