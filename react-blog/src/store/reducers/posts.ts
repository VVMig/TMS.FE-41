import { AnyAction } from "redux";
import { POSTS_ACTION_TYPES } from "../../constants/ACTION_TYPES";

const initialState = {
  posts: [],
  loading: false,
};

const postsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case POSTS_ACTION_TYPES.ADD_POSTS:
      return { ...state, posts: state.posts.concat(action.payload) };
    case POSTS_ACTION_TYPES.SET_LOADING:
      return { ...state, loading: action.payload };
    case POSTS_ACTION_TYPES.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export { postsReducer };
