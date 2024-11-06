import { UserData } from "@/component/type";

class Auth {
 
  static deAuthenticateUser(): void {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Error while de-authenticating user:", error);
    }
  }

  static storeUser(user: UserData): void {
    try {

      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.error("Error while storing user data:", error);
    }
  }

  static authenticateUser(data: {
    accessToken: string;
    data: any;
  }): void {
    try {
      const { accessToken, data: userData } = data;
      localStorage.setItem("token", accessToken);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      console.error("Error while authenticating user:", error);
    }
  }


  static isUserAuthenticated(): boolean {
    try {
      const token = localStorage.getItem("token");

      return Boolean(token);
    } catch (error) {
      console.error("Error while checking user authentication:", error);
      return false;
    }
  }


  static getToken(): string | boolean {
    try {
      const token = localStorage.getItem("token");

      return token || false;
    } catch (error) {
      console.error("Error while retrieving token:", error);
      return false;
    }
  }
}

export default Auth;
