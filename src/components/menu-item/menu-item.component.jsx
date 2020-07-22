import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, history }) => (
  <div
    style={{ backgroundImage: `url(${imageUrl})` }}
    className={`${size} menu-item`}
  >
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="background-image"
    />

    <div className="content" onClick={() => history.push(linkUrl)}>
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
