import { AuthFormValues, UserData } from "@/component/type";
import axiosService from "../axios/axios";

const API_URL = process.env.NEXT_PUBLIC_BASE_URL;




export default class Auth_API {
  static async signUp(data: AuthFormValues): Promise<{ accessToken: string; data: UserData }> {
    const response = await axiosService({
      method: 'POST',
      data: data,
      url: `${API_URL}/auth/signup`, 
    });
    return response; 
  }

  static async login(data: AuthFormValues): Promise<{ accessToken: string; data: UserData }> {
    const response = await axiosService({
      method: 'POST',
      data: data,
      url: `${API_URL}/auth/login`,
    });

    return response; 
  }

  static logout(): void {
    localStorage.removeItem('user');
  }
}
