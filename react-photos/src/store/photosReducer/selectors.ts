import { RootState } from "..";

export const photosSelector = (state: RootState) => state.photos.photos;
export const loadingPhotosSelector = (state: RootState) =>
  state.photos.isLoading;
