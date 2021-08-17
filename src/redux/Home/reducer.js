import * as types from "./../../config/actionType";

const initState = {
  isLoading: false,
  listEditor: [],
  listArticles: [],
  listReview: [],
  search: {
    keyword: "",
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.SET_LOADER:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        listEditor: action.listEditor,
        listArticles: action.listArticles,
        listReview: action.listReview,
      };
    case types.HANDLE_STATE:
      return {
        ...state,
        search: {
          ...state.search,
          [action.field]: action.value,
        },
      };
    default:
      return state;
  }
};
