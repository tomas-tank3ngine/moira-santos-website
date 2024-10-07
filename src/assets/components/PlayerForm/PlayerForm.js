import './PlayerForm.scss';
import React, { useState } from 'react';
import { addPlayer, getPlayers } from '../../utils/players';

const PlayerForm = () => {
    const initialPlayerState = {
        appearances: 0,
        firstName: '',
        goalsScored: 0,
        jerseyNumber: 0,
        lastName: '',
        positionPrimary: '',
        positionSecondary: '',
    };

    const [player, setPlayer] = useState(initialPlayerState);

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlayer({
            ...player,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newPlayerId = await addPlayer(player); // Calling the Firebase function
            setMessage(`Player added successfully with ID: ${newPlayerId}`);
            console.log('Player added:', newPlayerId);
        } catch (error) {
            setMessage(`Error adding player: ${error.message}`);
            console.error('Error adding player:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>{message && <p>{message}</p>}</div>

            <div>
                <label htmlFor="firstName">*First Name: </label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={player.firstName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="lastName">*Last Name: </label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={player.lastName}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="jerseyNumber">*Jersey Number: </label>
                <input
                    type="number"
                    id="jerseyNumber"
                    name="jerseyNumber"
                    value={player.jerseyNumber}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="positionPrimary">*Primary Position: </label>
                <input
                    type="text"
                    id="positionPrimary"
                    name="positionPrimary"
                    value={player.positionPrimary}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="positionSecondary">Secondary Position: </label>
                <input
                    type="text"
                    id="positionSecondary"
                    name="positionSecondary"
                    value={player.positionSecondary}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="appearances">Appearances: </label>
                <input
                    type="number"
                    id="appearances"
                    name="appearances"
                    value={player.appearances}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="goalsScored">Goals Scored: </label>
                <input
                    type="number"
                    id="goalsScored"
                    name="goalsScored"
                    value={player.goalsScored}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit">Submit Player</button>
        </form>
    );
};

export default PlayerForm;
