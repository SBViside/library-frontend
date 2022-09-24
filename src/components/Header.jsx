import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";

function Header({ headerNavigator }) {
  const [burger, setBurger] = useState(false);

  return (
    <header className="header">
      <div className="header__content container">
        <div className="header__left">
          <img src={logo} alt="ERROR" className="header__logo" />
          <div className="header__text">
            BOOKS
            <div className="logo__underline"></div>
          </div>
        </div>
        <div className="header__right">
          {burger ? (
            <MdOutlineClose
              className="burger"
              onClick={() => setBurger(!burger)}
            />
          ) : (
            <AiOutlineMenu
              className="burger"
              onClick={() => setBurger(!burger)}
            />
          )}

          <nav className="header__nav">
            <ul className={burger ? "nav__list burger__show" : "nav__list"}>
              {headerNavigator.map((n) => (
                <li className="nav__item" key={n.id}>
                  <Link to={n.link}>
                    <p className="nav__text">{n.text}</p>
                    <div className="nav__underline"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
