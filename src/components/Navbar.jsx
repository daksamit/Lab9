import { NavLink } from 'react-router-dom';

const getNavClassName = ({ isActive }) =>
  `nav-link${isActive ? ' active fw-semibold text-white' : ' text-white-50'}`;

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
    <div className="container">
      <span className="navbar-brand fw-bold">Lab 9 React Router</span>
      <div className="navbar-nav">
        {/* TODO: Dodaj NavLink do "/" i uzyj getNavClassName jako className. */}
        {/* TODO: Dodaj NavLink do "/posts". */}
        {/* TODO: Dodaj NavLink do "/about". */}
        <span className={getNavClassName({ isActive: false })}>
          TODO: uzupelnij linki nawigacyjne
        </span>
      </div>
    </div>
  </nav>
);

export default Navbar;
