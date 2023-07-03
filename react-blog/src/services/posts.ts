import { api } from "./configs/http";
class PostsService {
  getAll() {
    const data = api.get("/blog/posts/",{
      params:{
        limit: 15
      },
    });
      return data
    }
  }
  export const postsService = new PostsService();