import './PlayerRow.scss';
import { useState } from 'react';

function PlayerRow({player}) {
    const [thePlayer, setThePlayer] = useState(player);

    return(
        <div className='table-row'>
            <p className="table-row__player-item">{thePlayer.lastName}</p>
            <p className="table-row__player-item">{thePlayer.firstName}</p>
            <p className="table-row__player-item">{thePlayer.jerseyNumber}</p>
            <p className="table-row__player-item">{thePlayer.positionPrimary}</p>
            <p className="table-row__player-item">{thePlayer.positionSecondary}</p>
            <p className="table-row__player-item">{thePlayer.goalsScored}</p>
            <p className="table-row__player-item">{thePlayer.appearances}</p>
            <p className="table-row__player-item">EDIT</p>
        </div>
    )
}

export default PlayerRow;
