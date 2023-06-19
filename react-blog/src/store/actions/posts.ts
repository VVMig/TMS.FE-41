import { ThunkAction } from "redux-thunk";
import { postsService } from "../../services";
import { POSTS_ACTION_TYPES } from "../../constants/ActionTypes";
import { AnyAction } from "redux";

const sleep = (time: number) =>
  new Promise((res) => {
    setTimeout(() => {
      res("");
    }, time);
  });

export const setLoading = (loading: boolean) => ({
  type: POSTS_ACTION_TYPES.SET_LOADING,
  payload: loading,
});

export const fetchPosts = (): ThunkAction<void, any, null, AnyAction> => {
  return async (dispatch) => {
    try {
      const { data } = await postsService.getAll();

      dispatch(setLoading(true));

      await sleep(3000);

      dispatch({
        type: POSTS_ACTION_TYPES.ADD_POSTS,
        payload: data.results,
      });
    } catch (error) {
      dispatch({
        type: POSTS_ACTION_TYPES.SET_ERROR,
        payload: "Something went wrong",
      });
    } finally {
      dispatch(setLoading(false));
    }
  };
}