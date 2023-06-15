import { ThunkAction } from "redux-thunk";
import { postsService } from "../../services";
import { AnyAction } from "redux";
import { addPosts, setLoadingAction, setError } from "../reducers/posts";
const sleep = (time: number) =>
  new Promise((res) => {
    setTimeout(() => {
      res("");
    }, time);
  });

export const fetchPosts = (): ThunkAction<void, any, null, AnyAction> => {
  return async (Dispatch) => {
    try {
      const { data } = await postsService.getAll();

      Dispatch(setLoadingAction(true));

      await sleep(3000);

      Dispatch(addPosts(data.results));

    } catch (error) {
       Dispatch(setError());
    } finally {
      Dispatch(setLoadingAction(false));
    }
  };
};
