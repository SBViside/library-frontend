// PICTURES
import { CgProfile, CgLogIn, CgLogOut } from "react-icons/cg";
import { GrUserAdmin } from "react-icons/gr";
import { ImBooks } from "react-icons/im";
import { FaPencilAlt } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";

const publicNavigator = [
    { text: "Вход", link: "/login", icon: CgLogIn },
    { text: "Книги", link: "/books", icon: ImBooks },
    { text: "Авторы", link: "/authors", icon: FaPencilAlt },
    { text: "О нас", link: "/about", icon: BiInfoCircle },
];
const privateNavigator = [
    { text: "Профиль", link: "/profile", icon: CgProfile },
    { text: "Книги", link: "/books", icon: ImBooks },
    { text: "Авторы", link: "/authors", icon: FaPencilAlt },
    { text: "О нас", link: "/about", icon: BiInfoCircle },
    { text: "Выход", link: "/logout", icon: CgLogOut },
];
const adminNavigator = [
    { text: "Админ", link: "/admin", icon: GrUserAdmin },
];

export { publicNavigator, privateNavigator, adminNavigator };