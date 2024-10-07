import { Link } from 'react-router-dom';
import './AdminPage.scss';

import { getPlayers, getPlayerById } from '../../utils/players';
import { useState, useEffect } from 'react';

import PlayerForm from '../../components/PlayerForm/PlayerForm';

import PlayerRow from '../../components/PlayerRow/PlayerRow';

function AdminPage() {
    const [playersList, setPlayersList] = useState([]);

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
            <section className="player-table">
                {playersList.length > 0 && (
                    <div className="players-list">
                        {playersList
                            .map((player) => (
                                <PlayerRow key={player.id} player={player} />
                            ))}
                    </div>
                )}
            </section>

            <PlayerForm />

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
