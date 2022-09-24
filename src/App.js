import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './pages/NotFound';

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
                    <Route path="/books" element={null} />
                    <Route path="/authors" element={null} />
                    <Route path="/about" element={null} />
                    <Route path="/profile" element={null} />
                    <Route path="/404" element={<NotFound />} />

                    <Route path="*" element={<Navigate to="/404" />} />
                </Routes>

                <Footer />

            </BrowserRouter>

        </div>
    );
}

export default App;
