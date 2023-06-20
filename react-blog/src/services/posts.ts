import { api } from "./configs/http";

class PostsService {
  getAll() {
    const data = api.get("/blog/posts/");
    return data
  }
}

export const postsService = new PostsService();
