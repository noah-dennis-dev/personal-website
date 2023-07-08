import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to="/"><img src={Logo} id="logo" alt="logo" /></Link>
            <nav className="nav">
                <div id="menu-icon" onClick="document.getElementById('menu-icon').classList.toggle('open');
            document.getElementById('mobile-menu').classList.toggle('open');">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className="nav-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;