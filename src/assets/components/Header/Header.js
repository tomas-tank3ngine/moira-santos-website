import './Header.scss';
import { Link } from 'react-router-dom';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import LogoSimple from '../../images/MS-Simple.png';

function Header() {
    return (
        <>
            <nav className="header-nav">
                <Link to="/" className="header-nav__logo">
                    <img src={LogoSimple} alt="ms Logo" className="ms-logo" />
                </Link>
                <section className="link-container">
                    <Link to="/" className="link-container__link">
                        Home
                    </Link>
                    <Link to="/season" className="link-container__link">
                        Season
                    </Link>
                    <Link to="/teams" className="link-container__link">
                        Team
                    </Link>
                    <Link to="/gallery" className="link-container__link">
                        Gallery
                    </Link>
                    <Link to="/legacy" className="link-container__link">
                        Legacy
                    </Link>
                    <Link to="/about" className="link-container__link">
                        About Us
                    </Link>
                </section>
            </nav>

            <HamburgerMenu />
        </>
    );
}

export default Header;
