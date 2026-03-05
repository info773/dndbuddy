import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-between bg-slate-600 p-6">
      <div>
        <NavLink to="/">Logo</NavLink>
      </div>
      <ul className="flex gap-4">
        <li>
          <NavLink to="/battletracker">BattleTracker</NavLink>
        </li>
        <li>XYZ</li>
      </ul>
    </div>
  );
}

export default NavBar;
