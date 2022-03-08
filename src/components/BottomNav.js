import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FeedIcon, LibraryIcon } from "../icons/GeneralIcons";
import PlayerFloating from "./PlayerFloating";

const BottomNav = props => {
  
  const location = useLocation();
  const [currPage, setCurrPage] = useState("/");
  
  useEffect(() => {
    setCurrPage(location.pathname)
  },[location]);
  
  return (
    <nav className="main">
      <div className="global-nav">
        <Link to="/feed">
          <button className="icon large" data-active={currPage === "/feed"}>
            <FeedIcon />
          </button>
        </Link>
        <Link to="/library">
          <button className="icon large" data-active={currPage === "/library"}>
            <LibraryIcon />
          </button>
        </Link>
      </div>
      <PlayerFloating />
    </nav>
  );
}
export default BottomNav;