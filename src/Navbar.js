import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>WithU</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Bolg</Link>
        <Link to="/community">Community</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
