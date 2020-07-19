import React from "react";

import { useSelector } from "react-redux";
import { selectCollections } from "../../store/shopCollections/collections.selector";

import { CollectionPreview } from "../collection-preview/collection-preview.component";

import "./collection-overview.style.scss";

export const CollectionOverview = () => {
  const shopCollections = useSelector((state) => selectCollections(state));

  return (
    <div className="collection-overview">
      {shopCollections.map(({ id, ...otherCollectionsProps }) => (
        <CollectionPreview key={id} {...otherCollectionsProps} />
      ))}
    </div>
  );
};
