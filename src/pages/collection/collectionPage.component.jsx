import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import { CollectionItem } from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../store/shopCollections/collections.selector";

import "./collectionPage.style.scss";

const Collection = ({ match }) => {
  let collectionId = match.params.collectionId;

  const collection = useSelector((state) =>
    selectCollection(collectionId)(state)
  );

  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default withRouter(Collection);
