import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <ul className="container">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>

          <li>
            <NavLink to={"/suggested"}>suggested</NavLink>
          </li>
          <li>
            <NavLink to={"/myCourses"}>my courses</NavLink>
          </li>
          <li>
            <NavLink to={"/search"}>Search</NavLink>
          </li>
          <li>
            <a href="#footer">Contact us</a>
          </li>
          <li>login/signUp</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
