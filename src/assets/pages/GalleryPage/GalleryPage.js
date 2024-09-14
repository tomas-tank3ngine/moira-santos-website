import { Link } from 'react-router-dom';
import './GalleryPage.scss';

function GalleryPage() {
    return (
        <main className="not-found-page">
            <h1 className="not-found-page__title">404 - Page Not Found </h1>
            <p className="not-found-page__p">
                Go back{' '}
                <Link to="/" className="not-found-page__link">
                    Home
                </Link>
            </p>
        </main>
    );
}

export default GalleryPage;
