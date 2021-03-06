import React from "react";
import { useSelector } from "react-redux";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";

import { selectDirectorySections } from "../../store/directory/directory.selector";

export const Directory = () => {
  const sections = useSelector((state) => selectDirectorySections(state));

  return (
    <div className="directory-menu">
      {sections.map((section) => {
        return <MenuItem key={section.id} {...section} />;
      })}
    </div>
  );
};
