import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Post = () => {
    const [post, setPost] = useState({
        id: 0,
        title: "",
        text: "",
        image: "",
    })

    const params = useParams();
    console.log(params);


    useEffect(() => {
      axios.get(`https://studapi.teachmeskills.by/blog/posts/${params.id}/`).then((response) => {
        setPost(response.data);
      });
    }, [params.id]);


    return (
        <div >
            <h1>{post.title}</h1>
            <img src={post.image} alt="" />
            <p>{post.text}</p>
        </div>
    );
};

export default Post;