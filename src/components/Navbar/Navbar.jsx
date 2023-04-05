import React from "react";
import "./Navbar.scss";

import downArrow from "../../Assets/Vector3.png";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="menu">
          <div className="logo">
            <a href="#">Logo</a>
          </div>
          <nav>
            <ul>
              <li>
                <a href="">Dashboard</a>
              </li>
              <li>
                <a href="">Messages</a>
              </li>
              <li>
                <a href="">Clients</a>
              </li>
              <li>
                <a href="">Workouts</a>
              </li>
              <li>
                <a href="">Recipes</a>
              </li>
              <li>
                <a href="">Static pages</a>
              </li>
              <li>
                <a href="">Referral codes</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <div className="my-account">
            <p className="account">My account</p>
            <img src={downArrow} />
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Navbar;
