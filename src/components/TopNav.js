import { LogoLetter } from "../icons/Logos";

const TopNav = props => {
  return (
    <nav aria-label="secondary" className="top-nav">
      <div className="logo">
        <LogoLetter />
      </div>
      <div className="toolbar">
        <div className="search-input">
        </div>
        <div className="account-thumb">
        </div>
      </div>
    </nav>
  );
}
export default TopNav;