import { AuthProvider, HttpError } from "react-admin";
import data from "./users.json";

import { apiClient } from "./APIClient";

/**
 * This authProvider is only for test purposes. Don't use it in production.
 */

import axios  from "axios";


const validateLogin = async (username:string,password:string)=>{


  try {
    const response = await apiClient.login(
        username,
        password,
    );
    console.log(response)
    if(response !=null){
      return response
    }
    else{
      return false;
    }
  } catch (err: any) {
      return false
  }
}

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    
    const user = await apiClient.login(
      username,
      password,
     );

    if (user) {
      localStorage.setItem("token", user.accessToken);
      return Promise.resolve();
    }

    return Promise.reject(
      new HttpError("Unauthorized", 401, {
        message: "Invalid username or password",
      }),
    );
  },
  logout: () => {
    localStorage.removeItem("token");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("token") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => {
    return Promise.resolve(undefined);
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("token");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};

export default authProvider;
