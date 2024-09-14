// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './assets/utils/context-utils';
import Header from './assets/components/Header/Header';
import Footer from './assets/components/Footer/Footer';
//import pages
import NotFoundPage from './assets/pages/NotFoundPage/NotFoundPage';
import HomePage from './assets/pages/HomePage/HomePage';
import SeasonPage from './assets/pages/SeasonPage/SeasonPage';
import TeamsPage from './assets/pages/TeamsPage/TeamsPage';
import GalleryPage from './assets/pages/GalleryPage/GalleryPage';
import LegacyPage from './assets/pages/LegacyPage/LegacyPage';
import AboutPage from './assets/pages/AboutPage/AboutPage';

function App() {
    return (
        <BrowserRouter>
            <Store>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/teams" element={<TeamsPage />} />
                    <Route path="/season" element={<SeasonPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/legacy" element={<LegacyPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <Footer />
            </Store>
        </BrowserRouter>
    );
}

export default App;
