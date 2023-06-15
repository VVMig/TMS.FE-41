import { api } from "./configs/http";

class PostsService {
  getAll() {
    return api.get("/blog/posts/");
  }
}

export const postsService = new PostsService();
