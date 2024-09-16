import './PlayerCard.scss';
import IMG from '../../images/MSLogo_400x400.png'

function PlayerCard({player}){
    console.log(player);

    return(
        <div className="player-card">
            <img src={IMG} alt="Player headshot" className="player-card__background" />
            <section className="player-info">
                <div className="critial-info">
                    <p className="critial-info__jersey-number">#</p>
                    <p className="critial-info__f-name">FNAME</p>
                    <p className="critial-info__l-name">LNAME</p>
                </div>
                <p className="player-info__position">Position</p>
            </section>
        </div>

    )
}

export default PlayerCard;
