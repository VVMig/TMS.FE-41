import axios from "axios";

class PostsService {
  getAll() {
    return axios.get("https://studapi.teachmeskills.by/blog/posts/?limit=100");
  }
}

export const postsService = new PostsService();