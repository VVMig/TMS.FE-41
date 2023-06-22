import { api } from "./configs/http";

class PostsService {
  getAll() {
    return api.get("/blog/posts/", {
      params: {
        limit: 20,
      },
      headers: {
        Authorization: null,
      },
    });
  }
}

export const postsService = new PostsService();
