export const TOGGLE_CART_HIDDEN = "[EXECUTE] TOGGLE CART HIDDEN";

export const ADD_ITEM = "[EXECUTE] ADD ITEM";

export const REMOVE_ITEM = "[EXECUTE] REMOVE ITEM";

export const toggleCartHidden = () => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_CART_HIDDEN,
    });
  };
};

export const hideCartOnOutsideClick = () => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_CART_HIDDEN,
      payload: true,
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

export const removeItem = (item) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_ITEM,
      payload: item,
    });
  };
};
