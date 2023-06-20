import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postsService } from '../../services/posts';
import axios from 'axios';


const Post = () => {
    const [post, setPost] = useState({
        id: 0,
        title: "",
        text: "",
        src: "",
    })

    const params = useParams();
    // const prodId = params.id;
    console.log(params);
    

    useEffect(() => {
      axios.get(`https://studapi.teachmeskills.by/blog/posts/${params.id}/`).then((response) => {
        setPost(response.data);
      });
    }, [params.id]);

    // const activePost = async () => {

    //     await postsService.getId(prodId);

    // };

      useEffect(() => {
        // activePost();
        // console.log(activePost());
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <div >
            <h1>{post.title}</h1>
            <img src={post.src} alt="" />
            <p>{post.text}</p>
        </div>
    );
};

export default Post;