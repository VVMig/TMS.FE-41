import { createSlice } from "@reduxjs/toolkit";
import { fetchPhotos } from "./actions";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IPhoto {
  albumId?: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IPhotoState {
  photos: IPhoto[];
  isLoading: boolean;
}

const initialState: IPhotoState = {
  photos: [],
  isLoading: false,
};

export const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    removePhoto(state, action: PayloadAction<number>) {
      state.photos = state.photos.filter(({ id }) => id !== action.payload);
    },
    addPhoto(
      state,
      action: PayloadAction<{ title: string; imageSrc: string }>
    ) {
      state.photos.unshift({
        id: Date.now(),
        title: action.payload.title,
        url: action.payload.imageSrc,
        thumbnailUrl: action.payload.imageSrc,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchPhotos.fulfilled,
      (state, action: PayloadAction<IPhoto[]>) => {
        state.photos = [...state.photos, ...action.payload];
        state.isLoading = false;
      }
    );

    builder.addCase(fetchPhotos.pending, (state) => {
      state.isLoading = true;
    });
  },
});

// Action creators are generated for each case reducer function
export const { removePhoto, addPhoto } = photosSlice.actions;

export default photosSlice.reducer;
