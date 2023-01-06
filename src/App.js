import { useState } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { loginContext } from './context/loginContext';
// ROUTES
import { publicRoutes, privateRoutes, adminRoutes } from './routes/routes';
import { publicNavigator, privateNavigator, adminNavigator } from './routes/headerRoutes';

function App() {
    // login check (SHOULD FIX)
    const [logined, setLogined] = useState(JSON.parse(localStorage.getItem('user')) || { email: null, admin: false });
    const routes = logined.email ? (logined.admin ? [...privateRoutes, ...adminRoutes] : privateRoutes) : publicRoutes;
    const headerNavigator = logined.email ? (logined.admin ? [...privateNavigator, ...adminNavigator] : privateNavigator) : publicNavigator;

    return (
        <loginContext.Provider value={{ logined, setLogined }}>
            <div className="App">
                <BrowserRouter>
                    <Header headerNavigator={headerNavigator} />

                    <Routes>
                        <Route path="/" element={<Navigate to="/about" />} />
                        {routes.map(r =>
                            <Route key={r.path} path={r.path} element={<r.element />} exact={r.exact} />)
                        }
                        <Route path="*" element={<Navigate to="/404" />} />
                    </Routes>

                    <Footer />
                </BrowserRouter>
            </div >
        </loginContext.Provider>
    );
}

export default App;
