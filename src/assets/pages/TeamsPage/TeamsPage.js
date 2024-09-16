import { Link } from 'react-router-dom';
import './TeamsPage.scss';
import { getPlayers, getPlayerById } from '../../utils/players';
import { useState, useEffect } from 'react';

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
                <p className="players">{playersList[0].firstName}</p>
            )}
        </main>
    );
}

export default TeamsPage;
