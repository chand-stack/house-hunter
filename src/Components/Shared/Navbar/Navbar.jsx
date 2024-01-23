import { MdHomeWork } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/landloard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Landloards
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Contacts
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="w-full">
      <div className="navbar bg-base-100 container mx-auto">
        <div className="flex-1">
          <div className="flex flex-col items-center">
            <MdHomeWork className="text-3xl" />{" "}
            <p className="text-lg font-bold">House Hunter</p>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
