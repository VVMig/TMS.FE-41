import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Routes } from "../../constants/Routes";
import "./style.css";

const Post = () => {
   const [post, setPost] = useState({
      id: 0,
      title: "",
      text: "",
      image: "",
   });

   const params = useParams();
   console.log(params);

   useEffect(() => {
      axios
         .get(`https://studapi.teachmeskills.by/blog/posts/${params.id}/`)
         .then((response) => {
            setPost(response.data);
         });
   }, [params.id]);

   return (
      <div className="container">
         <div className="post">
            <h1 className="post__title">{post.title}</h1>
            <div className="post__image">
               <img className="post__image-jpg" src={post.image} alt="" />
            </div>
            <p className="post__text">{post.text}</p>
            <Link to={Routes.Home}>
               <button className="post__btn" >Back</button>
            </Link>
         </div>
      </div>
   );
};

export default Post;
