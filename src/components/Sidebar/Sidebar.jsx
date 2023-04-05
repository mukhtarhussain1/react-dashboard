import React from "react";
import "./Sidebar.scss";

import profile from "../../Assets/profile.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="credentials">
        <h3>Client profile</h3>
        <img src={profile}></img>
        <p>John Doe</p>
        <p>abc_john@email.com</p>
        <div className="greadentButton">
          <p className="gradientText">Message client</p>
        </div>
      </div>

      <hr />

      <div className="user-details">
        <div className="textMuted">
          <p>Subscription</p>
          <p>$19.99/mon</p>
        </div>
        <div className="user-details-right">
          <p>Active</p>
          <p className="gradientText">Change</p>
        </div>
      </div>

      <hr />

      <div className="user-details">
        <div className="textMuted">
          <p>Referral code</p>
        </div>
        <div className="user-details-right">
          <p>HBJHG</p>
        </div>
      </div>

      <hr />

      <div className="user-details">
        <div className="textMuted">
          <p>Gender</p>
          <p>Goal</p>
          <p>Exercise level</p>
          <p>Lifestyle</p>
        </div>
        <div className="user-details-right">
          <p>Male</p>
          <p>Lose weight</p>
          <p>Moderate</p>
          <p>Lightly active</p>
        </div>
      </div>

      <div className="greadentButton">
        <p className="gradientText">Assign personal workout</p>
      </div>
    </div>
  );
};

export default Sidebar;
