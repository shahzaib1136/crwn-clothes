export const TOGGLE_CART_HIDDEN = "[EXECUTE] TOGGLE CART HIDDEN";

export const ADD_ITEM = "[EXECUTE] ADD ITEM";

export const toggleCartHidden = () => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_CART_HIDDEN,
    });
  };
};

export const addItem = (item) => {
  return (dispatch) => {
    dispatch({
      type: ADD_ITEM,
      payload: item,
    });
  };
};
