import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/about" className="active-link">
            About Me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" className="active-link">
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="active-link">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" className="active-link">
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
