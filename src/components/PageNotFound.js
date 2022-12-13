import { Link } from 'react-router-dom';
import '../styles/components/PageNotFound.scss';

const PageNotFound = () =>{

    return(
        <>
        <div className='msgError_div'></div>
        <p className='msgError'>ERROR! Page not found.</p>
        <Link to='/' className='msgError_link'>Go back</Link>
        </>
    )
};

export default PageNotFound;