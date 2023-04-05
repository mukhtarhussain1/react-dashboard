import React from "react";
import "./Collapes.scss";

import downArrow from "../../Assets/Vector3.png";

const Collapes = ({ date, status, color }) => {
  return (
    <div className="collapes">
      <p>{date}</p>
      <div className="collapes-state">
        <p className={color ? "red" : ""}>{status}</p>
        {!color && (
          <div>
            <img src={downArrow} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapes;
