
import logo from '../assets/logo.svg' 
import Navbar from './navbar';

const Header = () => {
    return (  
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="logo" />
                <h1 className='logo-text' >Lilies</h1>
            </div>
            <Navbar />
        </div>
    );
}
 
export default Header;