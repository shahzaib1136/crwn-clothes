import React from "react";

import { MenuItem } from "../menu-item/menu-item.component";
import "./directory.style.scss";

export const Directory = () => {
  const sections = [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/hats",
      size: "",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets",
      size: "",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers",
      size: "",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      id: 4,
      linkUrl: "shop/womens",
      size: "large",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      id: 5,
      linkUrl: "shop/mens",
      size: "large",
    },
  ];

  return (
    <div className="directory-menu">
      {sections.map((section) => {
        return (
          <MenuItem
            title={section.title.toUpperCase()}
            imageUrl={section.imageUrl}
            size={section.size}
            key={section.id}
          />
        );
      })}
    </div>
  );
};
