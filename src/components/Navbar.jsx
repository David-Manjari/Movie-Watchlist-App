import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Movie Watchlist</div>
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Home
        </NavLink>
        <NavLink to="/search" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Search
        </NavLink>
        <NavLink to="/add" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Add Movie
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
