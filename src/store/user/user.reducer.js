import * as Actions from "./user.actions";

const initialState = {
  currentUser: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default UserReducer;
