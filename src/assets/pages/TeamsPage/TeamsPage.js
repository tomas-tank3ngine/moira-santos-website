//Styles
import './TeamsPage.scss';
import { Link } from 'react-router-dom';

import { getPlayers, getPlayerById } from '../../utils/players';
import { useState, useEffect } from 'react';

//Components
import PlayerCard from '../../components/PlayerCard/PlayerCard';

function TeamsPage() {
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
        <>
            <main className="teams-page">
                <section className="teams-page__hero"></section>

                <section className="position-category">
                    <p className="position-category__section-header">Goalkeepers</p>
                </section>
                <section className="position-category">
                    <p className="position-category__section-header">Defense</p>
                    {playersList.length > 0 && (
                        <div className="players-list">
                            {playersList
                                .filter((player) => player.positionPrimary === 'Defense')
                                .map((player) => (
                                    <PlayerCard key={player.id} player={player} />
                                ))}
                        </div>
                    )}
                </section>
                <section className="position-category">
                    <p className="position-category__section-header">Midfield</p>
                </section>

                <section className="position-category">
                    <p className="position-category__section-header">Offense</p>
                    {playersList.length > 0 && (
                        <div className="players-list">
                            {playersList
                                .filter((player) => player.positionPrimary === 'Striker')
                                .map((player) => (
                                    <PlayerCard key={player.id} player={player} />
                                ))}
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}

export default TeamsPage;
