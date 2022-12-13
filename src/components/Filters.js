import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByStatus from "./FilterByStatus";


const Filters = (props) =>{

    return(
        <>
        <FilterByName handleFilterName={props.handleFilterName} filterByName={props.filterByName}/>
        <FilterBySpecies handleFilterSpecies={props.handleFilterSpecies} filterBySpecies={props.filterBySpecies}/>
        <FilterByStatus filterByStatus={props.filterByStatus} handleFilterStatus={props.handleFilterStatus}/>
        </>
    )
};

export default Filters;