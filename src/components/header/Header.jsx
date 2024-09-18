import './header.css';

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <h1>
          <NavLink to="/">byewhile</NavLink>
        </h1>
    </header>
  )
}

export default Header