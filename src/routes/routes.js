import NotFound from '../pages/NotFound';
import Books from '../pages/Books';
import Authors from '../pages/Authors';
import Profile from '../pages/Profile';
import About from '../pages/About';
import Admin from '../pages/Admin';
import Login from '../pages/Login';


const publicRoutes = [
    { path: '/books', element: Books, exact: true },
    { path: '/authors', element: Authors, exact: true },
    { path: '/about', element: About, exact: false },
    { path: '/404', element: NotFound, exact: false },
    { path: '/login', element: Login, exact: false },
];
const privateRoutes = [
    { path: '/books', element: Books, exact: true },
    { path: '/authors', element: Authors, exact: true },
    { path: '/profile', element: Profile, exact: true },
    { path: '/about', element: About, exact: false },
    { path: '/404', element: NotFound, exact: false },
];
const adminRoutes = [
    { path: '/admin', element: Admin, exact: true },
];

export { publicRoutes, privateRoutes, adminRoutes };