import React, { useEffect } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { fetchPhotos } from "./store/photosReducer/actions";
import { useAppDispatch } from "./hooks";
import {
  loadingPhotosSelector,
  photosSelector,
} from "./store/photosReducer/selectors";
import { Photo } from "./Photo";
import { PhotoUploadForm } from "./PhotoUploadForm";
import { Time } from "./Time";

function App() {
  const photos = useSelector(photosSelector);
  const isLoading = useSelector(loadingPhotosSelector);

  const dispatch = useAppDispatch();

  const initPhotosFetch = () => {
    dispatch(fetchPhotos(123));
  };

  useEffect(() => {
    initPhotosFetch();
  }, []);

  return (
    <div className="App">
      <Time title="Current time" />
      <PhotoUploadForm />
      {isLoading
        ? "Loading..."
        : photos.map((photo) => <Photo key={photo.id} photo={photo} />)}
    </div>
  );
}

export default App;
