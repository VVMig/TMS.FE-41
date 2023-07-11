import { api } from "./configs/http";

class PostsService {
  getAll(page: number, search?: string, signal?: AbortSignal) {
    return api.get("/blog/posts/", {
      params: {
        limit: 12,
        offset: (page - 1) * 12,
        search,
      },
      headers: {
        Authorization: null,
      },
      signal,
    });
  }

  addPost(body: any) {
    return api.post("/blog/posts/", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

// (1 - x)*12 = 0
// (2 - x)*12 = 12
// (3 - x) * 12 = 24

// 1  1 - 12
// 2  13 - 24
// 3  25 - 37

export const postsService = new PostsService();
