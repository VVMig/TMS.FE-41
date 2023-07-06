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
import { Routes } from "../../constants/Routes";
interface IProps {
  id: string;
  title: string;
  src: string;
  text: string;
  postHeight:string;
  maxWidth:number;
  marginTop:number;
}

export const Post = ({id, title, src, text, postHeight,maxWidth,marginTop}: IProps) => {
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
      <CardMedia component="img" height={postHeight} image={src} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};
