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
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState } from "react";

interface IProps {
  title: string;
  src: string;
  text: string;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Post = ({ title, src, text }: IProps) => {
  const [count, setCount] = useState(0)
  return (
    <Card sx={{ maxWidth: 345, marginTop: 12 }}>
      <CardMedia component="img" height="194" image={src} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
        <div>
          <Checkbox
            {...label}
            icon={<ThumbUpIcon />}
            checkedIcon={<ThumbUpIcon />}
            onClick={() => setCount((count) => count + 1)}
          />
          {count}
          <Checkbox
            {...label}
            icon={<ThumbDownAltIcon />}
            checkedIcon={<ThumbDownAltIcon />}
            onClick={() => setCount((count) => count - 1 < 0 ? count : count - 1)}
          />
        </div>
        <div>
          <Checkbox
            {...label}
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
};
