import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { fetchPost } from "../../store/actions/post";
import { useEffect } from "react";
import { number } from "yup";
interface IProps {
  id: number;
  title: string;
  src: string;
  text: string;
}

export const Post = ({id, title, src, text,}: IProps) => {
  const dispatch = useDispatch() as AppDispatch;
  return (
    <Card sx={{ maxWidth: 345, marginTop: 12 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <Link to={'/post'}>
          <IconButton aria-label="settings" onClick={()=>{dispatch(fetchPost(id))}}>
            <MoreVertIcon />
          </IconButton>
          </Link>
        }
        title={title}
      />
      <CardMedia component="img" height="194" image={src} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};
