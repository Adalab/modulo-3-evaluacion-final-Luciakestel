import '../styles/components/FilterByName.scss';

const FilterByName = (props) =>{

    const handleSubmit = (event)=>{
    event.preventDefault();
}
const handleFilter = (event) =>{
    props.handleFilterName(event.target.value);
}
    return(
        <form onSubmit={handleSubmit} className='form'>
            <label className="form_label" htmlFor="searchName">Search by name:</label>
            <input type="text" placeholder='Ex: Rick' value={props.filterByName} onChange={handleFilter} className="form_input"/>
        </form>
    )
};

export default FilterByName;