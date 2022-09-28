import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
// PICTURES
import { CgProfile } from "react-icons/cg";
import { ImBooks } from "react-icons/im";
import { FaPencilAlt } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";

function Header() {
  const headerNavigator = [
    { id: 1, text: "Профиль", link: "/profile", icon: CgProfile },
    { id: 2, text: "Книги", link: "/books", icon: ImBooks },
    { id: 3, text: "Авторы", link: "/authors", icon: FaPencilAlt },
    { id: 4, text: "О нас", link: "/about", icon: BiInfoCircle },
  ];

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
                <li className="nav__item" key={n.id}>
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
