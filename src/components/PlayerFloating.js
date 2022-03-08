import { PlayIcon } from "../icons/GeneralIcons";

const PlayerFloating = props => {
  return (
    <div className="player-floating">
      <div className="media-art">
      </div>
      <div className="item-list">
        <h4>Starface*</h4>
        <h5>Jean Dawson</h5>
      </div>
      <button className="icon">
        <PlayIcon />
      </button>
    </div>
  );
}
export default PlayerFloating;