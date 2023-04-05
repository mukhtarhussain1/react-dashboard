import React from "react";
import "./Footer.scss";

import prev from "../../Assets/prev.png";
import next from "../../Assets/next.png";

const Footer = () => {
  return (
    <div className="footer">
      <p>1 - 15 of 995</p>
      <div className="footer-right-side">
        <p>Rows per page</p>
        <p className="dropdown">15</p>
        <div className="navigations">
          <img alt="img" src={prev} />
          <img alt="img" src={next} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
