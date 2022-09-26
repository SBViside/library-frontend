import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Books from './pages/Books';
import Authors from './pages/Authors';
import Profile from './pages/Profile';
import About from './pages/About';

function App() {

    const headerNavigator = [
        { id: 1, text: "Профиль", link: "/profile" },
        { id: 2, text: "Книги", link: "/books" },
        { id: 3, text: "Авторы", link: "/authors" },
        { id: 4, text: "Информация", link: "/about" },
    ];

    return (
        <div className="App">

            <BrowserRouter>

                <Header headerNavigator={headerNavigator} />

                <Routes>
                    <Route path="/" element={<Navigate to="/about" />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/authors" element={<Authors />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/404" element={<NotFound />} />

                    <Route path="*" element={<Navigate to="/404" />} />
                </Routes>

                <Footer />

            </BrowserRouter>

        </div >
    );
}

export default App;
