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
import { useSelector } from "react-redux";
import "../../style/style.css"
  
   const PostPage = () => {

    const [post, setPost] = useState({
      title: "",
      image: "",
      text: "",
      id: 0,
    });

  const params = useParams();
  
  useEffect(() => {
    axios.get(`https://studapi.teachmeskills.by/blog/posts/${params.id}/`).then((data)=> setPost(data.data));
  },[params.id]);
  const theme = useSelector((state:any) => state.theme.theme);
  return (
      <Card sx={{ maxWidth: 2000, marginTop: 5 }} className={theme}>
        <CardHeader className={theme}
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <Link to={'/'}>
            <IconButton aria-label="ArrowBack" className={theme}>
              <ArrowBack className={theme}/>
            </IconButton>
            </Link>
          }
          title={post.title}
        />
        <CardMedia component="img" height="700" image={post.image} alt="Paella dish" className={theme}/>
        <CardContent className={theme}>
          <Typography variant="body1" className={theme}>
            {post.text}
          </Typography>
        </CardContent>
      </Card>
    );
  };
  export default PostPage;