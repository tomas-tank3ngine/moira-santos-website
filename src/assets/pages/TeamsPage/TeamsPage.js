//Styles
import './TeamsPage.scss';
import { Link } from 'react-router-dom';

import { getPlayers, getPlayerById } from '../../utils/players';
import { useState, useEffect } from 'react';

//Components
import PlayerCard from '../../components/PlayerCard/PlayerCard'


function TeamsPage() {
    const [playersList, setPlayersList] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const players = await getPlayers();
            console.log(players)
            setPlayersList(players);
        }

        fetchData();
    }, [])


    return (
        <main className="teams-page">
            {playersList.length > 0 && (
                <div className="players-list">
                {playersList.map(player => (
                    <PlayerCard key={player.id} player={player} />
                ))}
            </div>
            )}
        </main>
    );
}

export default TeamsPage;
