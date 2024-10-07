import './PlayerRow.scss';
import { useState } from 'react';

function PlayerRow({player}) {
    const [thePlayer, setThePlayer] = useState(player);

    return(
        <div>
            {thePlayer.firstName}
        </div>
    )
}

export default PlayerRow;
