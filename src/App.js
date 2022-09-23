import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {

    const headerNavigator = [
        { id: 1, text: "Профиль", click: null },
        { id: 2, text: "Книги", click: null },
        { id: 3, text: "Авторы", click: null },
        { id: 4, text: "Информация", click: null },
    ];

    return (
        <div className="App">

            <Header headerNavigator={headerNavigator} />

            <BrowserRouter>
                <Routes>
                    <Route path="/books" element={null} />
                    <Route path="/authors" element={null} />
                    <Route path="/about" element={null} />
                    <Route path="/profile" element={null} />

                    <Route path="*" element={<Navigate to="/about" />} />
                </Routes>
            </BrowserRouter>

            <Footer />

        </div>
    );
}

export default App;
