import axios from "axios";
import { api } from "./configs/http";

class PostService {
  getOne(id:number) {
    const data = axios.get(`https://studapi.teachmeskills.by/blog/posts/${id}/`);
    return data
  }
}

export const postService = new PostService();