import types from "@/_actions/types.js";

const initialState = {
  token: "",
  userInfo: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SUCCESSFUL_LOGIN:
      const { token, ...userInfo } = payload;
      localStorage.setItem("sigma_token", token);
      return { ...state, token: token, userInfo: userInfo.info };
    case types.PERFORM_LOGOUT:
      localStorage.removeItem("sigma_token");
      return {
        token: "",
        userInfo: {},
      };
    case types.UPDATE_PROFILE:
      return { ...state, userInfo: payload };
    default:
      return state;
  }
};
