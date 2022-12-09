import React from "react";
import "./leftsidebar.css";
import globe from "../../asserts/img/Globe.svg";
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
  // const [isActive, setIsActive] =
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeclass="active">
          Home
        </NavLink>
        <div>
          <NavLink to="/public" className="side-nav-links" activeclass="active">
            Public
          </NavLink>
          <NavLink to="/questions" className="side-nav-links" activeclass="active">
            <span>
              <img src={globe} alt="Globe" />
            </span>{" "}
            Questions
          </NavLink>
          <NavLink to="/tags" className="side-nav-links" activeclass="active">
            Tags
          </NavLink>
          <NavLink to="/getallusers" className="side-nav-links" activeclass="active">
            Users
          </NavLink>
          <NavLink to="/companies" className="side-nav-links" activeclass="active">
            Companies
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
