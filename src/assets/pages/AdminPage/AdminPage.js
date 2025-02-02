import { Link } from 'react-router-dom';
import './AdminPage.scss';

import { getPlayers, getPlayerById } from '../../utils/players';
import { useState, useEffect } from 'react';

import PlayerForm from '../../components/PlayerForm/PlayerForm';

import PlayerTable from '../../components/PlayerTable/PlayerTable';

import ModalBasic from '../../components/ModalBasic/ModalBasic';

function AdminPage() {
    const [playersList, setPlayersList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const players = await getPlayers();
            console.log(players);
            setPlayersList(players);
        };

        fetchData();
    }, []);

    return (
        <main className="admin-page">
            <h1 className="admin-page__title">Admin Page </h1>
            <div className='add-player-modal'>
                <button className='add-player-modal__button' onClick={() => setIsModalOpen(true)}>+ Add New Player</button>

                <ModalBasic isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <h2>Add New Player</h2>
                    <PlayerForm onClose={() => setIsModalOpen(false)} />
                </ModalBasic>
            </div>

            <PlayerTable players={playersList} />

            {/* <PlayerForm /> */}

            <p className="admin-page__p">
                Go back{' '}
                <Link to="/" className="admin-page__link">
                    Home
                </Link>
            </p>
        </main>
    );
}

export default AdminPage;
