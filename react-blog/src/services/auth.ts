import axios from "axios";

class AuthService {
  register(body: { username: string; password: string; email: string }) {
    return axios.post("https://studapi.teachmeskills.by/auth/users/", body);
  }

  verifyEmail(body: { uid: string; token: string }) {
    return axios.post(
      "https://studapi.teachmeskills.by/auth/users/activation/",
      body
    );
  }
}

export const authService = new AuthService();
