import React from "react";
import { Route, withRouter } from "react-router-dom";

import { CollectionOverview } from "../../components/collection-overview/collection-overview.component";
import Collection from "../collection/collectionPage.component";

const ShopePage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={Collection}
      />
    </div>
  );
};

export default withRouter(ShopePage);
