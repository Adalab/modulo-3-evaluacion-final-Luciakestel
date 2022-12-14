import '../styles/components/FilterByStatus.scss';

const FilterByStatus = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handleFilter = (event) => {
        props.handleFilterStatus(event.target.value);
    }
    return (
        <form onSubmit={handleSubmit} className='formStatus'>
            <label htmlFor="searchName" className='formStatus_label'>By status:</label>
            <input type="checkbox" value='Alive' onChange={handleFilter} checked={props.filterByStatus.includes('Alive')} className='formStatus_input' />
            <label htmlFor="alive" className='formStatus_label2'>Alive</label>
            <input type="checkbox" value='Dead' onChange={handleFilter}
                checked={props.filterByStatus.includes('Dead')} className='formStatus_input' />
            <label htmlFor="alive" className='formStatus_label2'>Dead</label>
            <input type="checkbox" value='unknown' onChange={handleFilter}
                checked={props.filterByStatus.includes('unknown')} className='formStatus_input' />
            <label htmlFor="alive" className='formStatus_label2'>Unknown</label>
        </form>
    )
};

export default FilterByStatus;