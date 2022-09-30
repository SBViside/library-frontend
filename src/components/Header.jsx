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
        <Link className="header__left" to="/books">
          <img src={logo} alt="ERROR" className="header__logo" />
          <div className="header__text">
            BOOKS
            <div className="logo__underline"></div>
          </div>
        </Link>
        <div className="header__right">
          <div className="burger" onClick={() => setBurger(!burger)}>
            {burger ? <MdOutlineClose /> : <AiOutlineMenu />}
          </div>

          <nav className="header__nav">
            <ul className={burger ? "nav__list burger__show" : "nav__list"}>
              {headerNavigator.map((n) => (
                <li className="nav__item" key={n.link}>
                  <Link
                    className="nav__link"
                    to={n.link}
                    onClick={() => setBurger(false)}
                  >
                    <n.icon />
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
