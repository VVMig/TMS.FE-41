
import React from "react";
import { SinglePost } from "./SinglePost";
import { useSelector } from "react-redux";

const PostPage = () => {
    const data1 = useSelector((state:any) => {return state.post.data});
    console.log(data1);
    return(SinglePost({title:data1.title, src:data1.image, text:data1.text}));
}

export default PostPage;