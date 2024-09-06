import './Footer.scss';
// import Icons from '../../utils/IconHolder';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <h1 className="footer__title">Contact</h1>
            <section className="footer-container">
                <section className="footer-container__left">LEFT</section>
                <section className="footer-container__right">
                    <h2 className="footer-menu__header">Sitemap</h2>
                    <ul className={`footer-menu__nav`}>
                        <li className="footer-menu__nav--link">
                            <Link to="/" className="hyperlink">
                                Home
                            </Link>
                        </li>
                        <li className="footer-menu__nav--link">
                            <Link to="/teams" className="hyperlink">
                                Teams
                            </Link>
                        </li>
                        <li className="footer-menu__nav--link">
                            <Link to="/season" className="hyperlink">
                                Season
                            </Link>
                        </li>
                        <li className="footer-menu__nav--link">
                            <Link to="/gallery" className="hyperlink">
                                Gallery
                            </Link>
                        </li>
                        <li className="footer-menu__nav--link">
                            <Link to="/legacy" className="hyperlink">
                                Legacy
                            </Link>
                        </li>
                        <li className="footer-menu__nav--link">
                            <Link to="/about" className="hyperlink">
                                About
                            </Link>
                        </li>
                    </ul>
                </section>
            </section>
            <p className="footer__copyright">
                ©TomasMartinez2024 |{' '}
                <Link to="https://github.com/tomas-tank3ngine/portfolio-site" className="footer__copyright--link">
                    View this site on Github
                </Link>
            </p>
        </footer>
    );
}
