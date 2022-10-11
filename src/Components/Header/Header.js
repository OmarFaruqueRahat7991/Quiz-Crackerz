import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div className="">
      <div>
        <nav>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "active" : undefined
            }
          >
            Home
          </NavLink>
          <NavLink to="/topics"
          className={({ isActive }) =>
          isActive ? "active" : undefined
        }
          >Topics</NavLink>
          <NavLink to="/statistics"
          className={({ isActive }) =>
          isActive ? "active" : undefined
        }
          >Statistics</NavLink>
          <NavLink to="/blogs"
          className={({ isActive }) =>
          isActive ? "active" : undefined
        }
          >Blogs</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
