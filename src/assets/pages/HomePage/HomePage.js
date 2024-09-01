import { Link } from 'react-router-dom';
import './HomePage.scss';

import Logo from '../../images/MSLogo_400x400.png'
import Riley from '../../images/Riley19.png'

function HomePage() {
    return (
        <main className="homepage">
            <section className="homepage-hero">
                <img src={Logo} alt="Logo" className="homepage-hero__logo" />
                <img src={Riley} alt="HERO" className="homepage-hero__action-shot" />
            </section>
            <nav className="homepage-nav">
                <Link to="/season" className="nav-card">
                    <h2 className="nav-card__title">SEASON</h2>
                    <img src={Riley} alt="SEASON" className="nav-card__background" />
                </Link>
                <Link to="/teams" className="nav-card">
                    <h2 className="nav-card__title">TEAMS</h2>
                    <img src={Riley} alt="TEAMS" className="nav-card__background" />
                </Link>
                <Link to="/gallery" className="nav-card">
                    <h2 className="nav-card__title">GALLERY</h2>
                    <img src={Riley} alt="GALLERY" className="nav-card__background" />
                </Link>
                <Link to="/legacy" className="nav-card">
                    <h2 className="nav-card__title">LEGACY</h2>
                    <img src={Riley} alt="HEADER5" className="nav-card__background" />
                </Link>
                <Link to="/about" className="nav-card">
                    <h2 className="nav-card__title">ABOUT</h2>
                    <img src={Riley} alt="HEADER5" className="nav-card__background" />
                </Link>

            </nav>

            <section className="homepage-sponsors">
                <Link to="https://www.instagram.com/runninghorserestos/" target="_blank" className="sponsor-link">
                    <img src="" alt="Sponsors" className="sponsor-link__image" />
                </Link>
            </section>

        </main>
    );
}

export default HomePage;
