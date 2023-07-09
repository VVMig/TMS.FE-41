import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Checkbox,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import { Routes } from "../../constants/Routes";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState } from "react";

interface IProps {
  id: string;
  title: string;
  src: string;
  text: string;
  maxHeight:string;
  maxWidth:number;
  marginTop:number;

}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Post = ({ id, title, src, text, maxHeight, maxWidth, marginTop }: IProps) => {
  const [count, setCount] = useState(0)
  return (
    <Card sx={{ maxWidth: maxWidth, marginTop: marginTop }}>
    <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <Link to={Routes.Post.replace(':id',id)}>
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
          </Link>
        }
        title={title}
      />
      <CardMedia component="img" height={maxHeight} image={src} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};