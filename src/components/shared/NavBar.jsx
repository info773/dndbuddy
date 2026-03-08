import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function NavBar() {
  return (
    <div className="flex justify-between bg-slate-600 p-4">
      <div>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
      <ul className="flex justify-center items-center gap-4">
        <li>
          <NavLink to="/battletracker">
            <span className="nav-pill">BattleTracker</span>
          </NavLink>
        </li>
        <li>
          <span className="nav-pill">XYZ</span>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
