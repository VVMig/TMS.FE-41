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
  import { Link, useParams } from "react-router-dom";
  import { ArrowBack } from "@mui/icons-material";
  import { useEffect, useState } from "react";
  import axios from "axios";
  import { postService } from "../../services/post";


   const PostPage = () => {

    const [post, setPost] = useState({
      title: "",
      image: "",
      text: "",
      id: 0,
    });

  const params = useParams();

  useEffect(() => {
    postService.getOne(params.id as string);
  }, [params.id]);

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
          title={post.title}
        />
        <CardMedia component="img" height="700" image={post.image} alt="Paella dish" />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            {post.text}
          </Typography>
        </CardContent>
      </Card>
    );
  };
  export default PostPage;
  