import React from "react";
import pen from "../../asserts/img/Pen.svg";
import comment from "../../asserts/img/Comment.svg";
import bgLogo from "../../asserts/img/blacklogo.svg";
import { Link } from "react-router-dom";

const Widget = () => {
  return (
    <div className="widget">
      <h4>The Overflow Blog</h4>
      <div className="right-sidebar-div-1">
        <img src={pen} alt="pen" width="18" />
        <p>
          <Link>Here’s what it’s like to develop VR at Meta (Ep. 508)</Link>
        </p>
      </div>
      <div className="right-sidebar-div-1">
        <img src={pen} alt="pen" width="18" />
        <p>
          <Link>
            Why writing by hand is still the best way to retain information
          </Link>
        </p>
      </div>

      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <img src={comment} alt="pen" width="18" />
        <p>
          <Link>The Windows Phone SE site has been archived</Link>
        </p>
      </div>
      <div className="right-sidebar-div-1">
        <img src={comment} alt="pen" width="18" />
        <p>
          <Link>Stack Gives Back to Open Source 2022</Link>
        </p>
      </div>

      <h4>The Overflow Blog</h4>
      <div className="right-sidebar-div-1">
        <img src={bgLogo} alt="pen" width="18" />
        <p>
          <Link>Here’s what it’s like to develop VR at Meta (Ep. 508)</Link>
        </p>
      </div>
      <div className="right-sidebar-div-1">
        <img src={bgLogo} alt="pen" width="18" />
        <p>
          <Link>
            Why writing by hand is still the best way to retain information
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Widget;
