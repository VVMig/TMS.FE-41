import { useAppDispatch } from "../hooks";
import { IPhoto, removePhoto } from "../store/photosReducer";
import "./styles.css";

interface IProps {
  photo: IPhoto;
}

export const Photo = ({ photo }: IProps) => {
  const dispatch = useAppDispatch();

  const onClickDelete = () => {
    dispatch(removePhoto(photo.id));
  };

  return (
    <div className="card">
      <div className="actions-container">
        <button className="action-btn" onClick={onClickDelete}>
          Delete
        </button>
      </div>
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <h2>{photo.title}</h2>
    </div>
  );
};
