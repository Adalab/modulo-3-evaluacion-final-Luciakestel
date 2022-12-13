

const FilterBySpecies = (props) =>{

const handleSubmit = (event)=>{
        event.preventDefault();
    };

const handleChange = (event) =>{
    props.handleFilterSpecies(event.target.value);
};
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchSpecies">Search by species:</label>
             <select name="species" id="species" onChange={handleChange} value={props.filterBySpecies}>
                <option value="all">all</option>
                <option value="Alien">alien</option>
                <option value="Human">human</option>
             </select>
        </form>
    )
};

export default FilterBySpecies;