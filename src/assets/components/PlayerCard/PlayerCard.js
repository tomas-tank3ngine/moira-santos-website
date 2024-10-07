import './PlayerCard.scss';
import IMG from '../../images/MSLogo_400x400.png';

function PlayerCard({ player }) {
    console.log(player);

    return (
        <div className="player-card">
            <img src={IMG} alt={`${player.firstName} ${player.lastName}`} className="player-card__background" />
            <section className="player-info">
                <div className="critial-info">
                    <p className="critial-info__jersey-number">{player.jerseyNumber} </p>
                    <p className="critial-info__f-name">{player.firstName}</p>
                    <p className="critial-info__l-name">{player.lastName}</p>
                </div>
                <p className="player-info__position">{player.positionPrimary}</p>
            </section>
        </div>
    );
}

export default PlayerCard;
