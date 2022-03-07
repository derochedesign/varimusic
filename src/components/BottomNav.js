import { Link } from "react-router-dom";
import PlayerFloating from "./PlayerFloating";

const BottomNav = props => {
  return (
    <nav className="main">
      <div className="global-nav">
        <Link to="/feed"><h1>F</h1></Link>
        <Link to="/library"><h1>L</h1></Link>
      </div>
      <PlayerFloating />
    </nav>
  );
}
export default BottomNav;