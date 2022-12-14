import '../styles/components/FilterBySpecies.scss';

const FilterBySpecies = (props) =>{

const handleSubmit = (event)=>{
        event.preventDefault();
    };

const handleChange = (event) =>{
    props.handleFilterSpecies(event.target.value);
};
    return(
        <form onSubmit={handleSubmit} className='formSpecies'>
            <label className="formSpecies_label" htmlFor="searchSpecies">By species:</label>
             <select name="species" id="species" onChange={handleChange} value={props.filterBySpecies} className='formSpecies_select'>
                <option value="all">All</option>
                <option value="Alien">Alien</option>
                <option value="Human">Human</option>
             </select>
        </form>
    )
};

export default FilterBySpecies;