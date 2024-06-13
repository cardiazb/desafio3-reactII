import { NavLink } from "react-router-dom";
import { CgPokemon } from "react-icons/cg";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <div className="navbar">
      <div>
        <CgPokemon size={30} />
      </div>
      <div>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>{" "}
        {"  |  "}
        <NavLink className={setActiveClass} to="/personajes/">
          Personajes
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
