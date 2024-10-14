import './PlayerTable.scss';
import PlayerRow from '../PlayerRow/PlayerRow'
import { useState } from 'react';

function PlayerTable({players}) {
    const [playerList, setplayerList] = useState(players);
    console.log(players)

    return (
        <section className="player-table">
            <div className="player-table__headers">
                <p className="table-header">Last Name</p>
                <p className="table-header">First Name</p>
                <p className="table-header">Jersey Num.</p>
                <p className="table-header">Prim. Position</p>
                <p className="table-header">Sec. Position</p>
                <p className="table-header">Goals</p>
                <p className="table-header">Appearances</p>
                <p className="table-header">Action</p>
            </div>

            {players.length > 0 && (
                <div className="players-table__table-rows">
                    {players.map((player) => (
                        <PlayerRow key={player.id} player={player} />
                    ))}
                </div>
            )}
        </section>
    );
}

export default PlayerTable;
