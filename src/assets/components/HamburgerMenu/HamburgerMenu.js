import './HamburgerMenu.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Icons from '../../utils/IconHolder';

function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`menu-background ${isOpen ? 'open' : 'closed'}`}></div>
            {isOpen ? (
                <menu className={`open-menu`}>
                    <button className="open-menu__button" onClick={handleMenu}>
                        <img src={Icons().CloseIcon} alt="close menu" className="open-menu__button--icon" />
                    </button>

                    <ul className={`open-menu__nav`}>
                        <li className="open-menu__nav--link">
                            <Link to="/" className="hyperlink">
                                Home
                            </Link>
                        </li>
                        <li className="open-menu__nav--link">
                            <Link to="/teams" className="hyperlink">
                                Teams
                            </Link>
                        </li>
                        <li className="open-menu__nav--link">
                            <Link to="/season" className="hyperlink">
                                Season
                            </Link>
                        </li>
                        <li className="open-menu__nav--link">
                            <Link to="/gallery" className="hyperlink">
                                Gallery
                            </Link>
                        </li>
                        <li className="open-menu__nav--link">
                            <Link to="/legacy" className="hyperlink">
                                Legacy
                            </Link>
                        </li>
                        <li className="open-menu__nav--link">
                            <Link to="/about" className="hyperlink">
                                About
                            </Link>
                        </li>
                    </ul>
                </menu>
            ) : (
                <menu className={`close-menu`}>
                    <button className="close-menu__button" onClick={handleMenu}>
                        <img src={Icons().MenuIcon} alt="hamburger menu" className="close-menu__button--icon" />
                    </button>
                </menu>
            )}

            {/* <menu className={`menu`}>
          {isOpen ? (
            <>
              <div className={`menu__background`}></div>
              <button className="menu__button" onClick={handleMenu}>
                <img
                  src={Icons().CloseIcon}
                  alt="close menu"
                  className="menu__button--icon"
                />
              </button>
              <ul className="menu__nav">
                <li className="menu__nav--link"><a href="#about">About</a></li>
                <li className="menu__nav--link"><a href="#recent-work">Recent Work</a></li>
                <li className="menu__nav--link"><a href="#recent-work">Contact</a></li>
              </ul>
            </>
          ) : (
            <>
                <div className="menu__closed-background"></div>
                <button className="menu__button" onClick={handleMenu}>
                <img
                    src={Icons().MenuIcon}
                    alt="hamburger menu"
                    className="menu__button--icon"
                />
                </button>
            </>
          )}
        </menu> */}

            {/* <div className="test1">
            {isOpen ? <div className="test1-a"></div> : <div className="test1-b"></div>}
        </div> */}
        </>
    );
}

export default HamburgerMenu;
