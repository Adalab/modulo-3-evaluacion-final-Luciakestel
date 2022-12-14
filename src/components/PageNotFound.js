import { Link } from 'react-router-dom';
import '../styles/components/PageNotFound.scss';

const PageNotFound = () =>{

    return(
        <>
        <h1 className='msgError_title'>Error!</h1>
        <div className='msgError_div'></div>
        <p className='msgError'>Page not found.</p>
        <Link to='/' className='msgError_link'>Go back</Link>
        </>
    )
};

export default PageNotFound;