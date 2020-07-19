import { createSelector } from "reselect";

const selectShopdata = (state) => state.shopCollections;

export const selectCollections = createSelector(
  [selectShopdata],
  (shopData) => shopData.data
);
