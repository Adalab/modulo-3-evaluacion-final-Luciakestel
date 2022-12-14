import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByStatus from "./FilterByStatus";
import '../styles/components/Filters.scss';

const Filters = (props) => {

    return (
        <>
            <FilterByName handleFilterName={props.handleFilterName} filterByName={props.filterByName} />
            <FilterBySpecies handleFilterSpecies={props.handleFilterSpecies} filterBySpecies={props.filterBySpecies} />
            <FilterByStatus filterByStatus={props.filterByStatus} handleFilterStatus={props.handleFilterStatus} />
            <button onClick={props.handleReset} className='reset'>Reset filters</button>
        </>
    )
};

export default Filters;