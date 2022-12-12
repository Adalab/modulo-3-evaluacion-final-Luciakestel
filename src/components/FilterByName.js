const FilterByName = (props) =>{

    const handleSubmit = (event)=>{
    event.preventDefault();
}
const handleFilter = (event) =>{
    props.handleFilterName(event.target.value);
}
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchName">Búsqueda por nombre:</label>
            <input type="text" value={props.FilterByName} onChange={handleFilter}/>
        </form>
    )
};

export default FilterByName;