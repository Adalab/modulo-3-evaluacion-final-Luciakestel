import '../styles/components/Header.scss';
import logo from '../images/RYM.png';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo Rick and Morty" className='header_img' />
        </header>
    )
};

export default Header;