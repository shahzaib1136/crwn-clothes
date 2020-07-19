import * as Actions from "./testing.actions";

const initialState = {
  testing: null,
};

const TestReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.TEST_DYNAMIC_REDUX:
      return {
        ...state,
        testing: action.payload,
      };

    default:
      return state;
  }
};

export default TestReducer;
