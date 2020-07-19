export const TEST_DYNAMIC_REDUX = "[EXECUTE] TEST DYNAMIC REDUX";

export function testingDynamicRedux(user) {
  return (dispatch) => {
    dispatch({
      type: TEST_DYNAMIC_REDUX,
      payload: "test pass injected dynamic state to redux store",
    });
  };
}
