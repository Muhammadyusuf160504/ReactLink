import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h1>Articles</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contack</NavLink>
    </nav>
  );
}
export default Nav;
