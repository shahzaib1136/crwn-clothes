import React, { useState } from "react";

import { CollectionPreview } from "../../components/collection-preview/collection-preview.component";
import shop_Data from "./shop.data";

export const ShopePage = () => {
  const [shopData] = useState(shop_Data);

  return (
    <div className="shop-page">
      {shopData.map(({ id, ...otherCollectionsProps }) => (
        <CollectionPreview key={id} {...otherCollectionsProps} />
      ))}
    </div>
  );
};
