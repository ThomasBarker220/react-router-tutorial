import { NavLink } from "react-router-dom";

const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to={"/"}
        className={({ isActive }) => {
          return isActive ? "link active" : "link";
        }}
      >
        Home
      </NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/products"}>Products</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
    </nav>
  );
};

export default StyledNavbar;
