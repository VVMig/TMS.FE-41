import { api } from "./configs/http";
class PostsService {
  getAll() {
    return api.get("/blog/posts/", {
      params:{
        limit: 100,
      },
    });
    }
  }
  export const postsService = new PostsService();