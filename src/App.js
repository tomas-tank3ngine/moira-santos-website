// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './assets/utils/context-utils';
import NotFoundPage from './assets/pages/NotFoundPage/NotFoundPage';
import Header from './assets/components/Header/Header';
import Footer from './assets/components/Footer/Footer';
import HomePage from './assets/pages/HomePage/HomePage';

function App() {
    return (
        <BrowserRouter>
            <Store>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/teams" element={<>Teams Page</>} />
                    <Route path="/season" element={<>Season Page</>} />
                    <Route path="/gallery" element={<>Gallery Page</>} />
                    <Route path="/legacy" element={<>Legacy Page</>} />
                    <Route path="/about" element={<>About Page</>} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <Footer />
            </Store>
        </BrowserRouter>
    );
}

export default App;
