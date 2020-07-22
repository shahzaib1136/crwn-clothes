import { createSelector } from "reselect";

const selectShopdata = (state) => state.shopCollections;

export const selectCollections = createSelector(
  [selectShopdata],
  (shopData) => shopData.data
);

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  (collections) => {
    return Object.keys(collections).map(
      (collection) => collections[collection]
    );
  }
);

export const selectCollection = (props) => {
  return createSelector([selectCollections], (collections) => {
    return collections[props];
  });
};
