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
  import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
  
  interface IProps {
    title: string;
    src: string;
    text: string;
  }
  
  export const SinglePost = ({ title, src, text }: IProps) => {
    return (
      <Card sx={{ maxWidth: 2000, marginTop: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <Link to={'/'}>
            <IconButton aria-label="ArrowBack">
              <ArrowBack />
            </IconButton>
            </Link>
          }
          title={title}
        />
        <CardMedia component="img" height="700" image={src} alt="Paella dish" />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </Card>
    );
  };
  