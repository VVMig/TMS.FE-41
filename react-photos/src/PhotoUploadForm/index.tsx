import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPhoto } from "../store/photosReducer";

export const PhotoUploadForm = () => {
  const [photoSrc, setPhotoSrc] = useState<string | ArrayBuffer | null>(null);
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!title && !photoSrc) {
      return;
    }

    dispatch(
      addPhoto({
        title,
        imageSrc: photoSrc as string,
      })
    );
  };

  const onChangeFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    const fileReader = new FileReader();

    fileReader.readAsDataURL(e.target.files?.[0] as Blob);

    fileReader.onload = () => {
      setPhotoSrc(fileReader.result);
    };
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 300,
        margin: "0 auto",
        marginBottom: 12,
      }}
    >
      <input
        placeholder="title"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <input
        placeholder="photo"
        type="file"
        onChange={onChangeFile}
        accept="image/*"
      />
      {photoSrc && <img src={photoSrc as string} alt="" width={150} />}
      <button type="submit">Upload photo</button>
    </form>
  );
};
