import React from "react";
import "./RighSideBar.scss";

const RighSideBar = () => {
  return (
    <div className="right-side-bar">
      <p>Active rate</p>
      <h3>95%</h3>
      <hr />

      <div className="user-active">
        <div className="textMuted">
          <p>Last active</p>
        </div>
        <div className="user-active-right">
          <p>12 Nov, 2023.</p>
        </div>
      </div>
    </div>
  );
};

export default RighSideBar;
