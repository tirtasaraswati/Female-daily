import * as types from "./../../config/actionType";

const initState = {
  isLoading: false,
  listEditor: [],
  listArticles: [],
  listReview: [],
  listGroup: [
    {
      title: "Embrace the Curl",
      totalMember: 20,
      totalContent: 10,
      comment: 9,
      desc: "May our curls pop and never stop!",
    },
    {
      title: "Embrace the Curl",
      totalMember: "-",
      totalContent: "-",
      comment: "-",
      desc: "May our curls pop and never stop!",
    },
    {
      title: "Embrace the Curl",
      totalMember: 10,
      totalContent: 9,
      comment: 6,
      desc: "May our curls pop and never stop!",
    },
  ],
  listMatchType: [
    {
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      title: "Match Skin Type",
      value: 4.9,
      total: 7,
      name: "Y.O.U Lip Cream",
      desc: "Lip cream",
      info: "Neutral Rose",
      editor: "Andien",
      role: "Senior Editor",
    },
    {
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      title: "Match Skin Type",
      value: 4.9,
      total: 7,
      name: "Y.O.U Lip Cream",
      desc: "Lip cream",
      info: "Neutral Rose",
      editor: "Andien",
      role: "Senior Editor",
    },
    {
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      title: "Match Skin Type",
      value: 4.9,
      total: 7,
      name: "Y.O.U Lip Cream",
      desc: "Lip cream",
      info: "Neutral Rose",
      editor: "Andien",
      role: "Senior Editor",
    },
  ],

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
