// import { GetUserViewApi } from "api/UserApi";
export const SET_CURRENT_USER = "[EXECUTE] SET CURRENT USER";

// export function getUserDetail(id) {
//   return (dispatch) => {
//     // GetUserViewApi()
//     //   .then((res) => {
//     dispatch({
//       type: SET_CURRENT_USER,
//       payload: "test",
//     });
//     //   })
//     //   .catch((err) => {
//     //     throw err;
//     //   });
//   };
// }
export function setCurrentUser(user) {
  return (dispatch) => {
    dispatch({
      type: SET_CURRENT_USER,
      payload: user,
    });
  };
}
