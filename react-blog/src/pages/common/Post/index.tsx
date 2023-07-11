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

interface IProps {
  title: string;
  src: string;
  text: string;
  size?: "default" | "small";
}

export const Post = ({ title, src, text, size = "default" }: IProps) => {
  return (
    <Card
      sx={{
        marginTop: 0,
      }}
    >
      <CardHeader
        sx={
          size === "default"
            ? undefined
            : {
                padding: 1,
              }
        }
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
      />
      <CardMedia
        component="img"
        height={size === "default" ? 200 : 50}
        image={src}
        alt="Paella dish"
      />
      <CardContent
        sx={
          size === "default"
            ? undefined
            : {
                padding: 1,
              }
        }
      >
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};
