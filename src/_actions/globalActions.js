import types from "./types";

const globalActions = {
  changeLanguage: (data) => {
    return {
      type: types.CHANGE_LANGUAGE,
      payload: data,
    };
  },
  fillLanguages: (data) => {
    return {
      type: types.FILL_LANGUAGES,
      payload: data,
    };
  },
  shouldLoad: (data) => {
    return {
      type: types.LOADING,
      payload: data,
    };
  },
};

export { globalActions };
