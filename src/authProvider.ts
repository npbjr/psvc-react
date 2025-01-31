
import { AuthProvider, HttpError } from "react-admin";
import { userClient } from "./rest/usersAPIClient";

export const authProvider: AuthProvider = {
    login: async ({ username, password }) => {
        const user = await userClient.login(username, password);

        if (user) {
            localStorage.setItem("token", user.accessToken);
            return Promise.resolve();
        }

        return Promise.reject(
            new HttpError("Unauthorized", 401, {
                message: "Invalid username or password",
            })
        );
    },

    logout: () => {
        localStorage.removeItem("token");
        return Promise.resolve();
    },

    checkError: () => Promise.resolve(),

    checkAuth: () => {
        return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
    },

    getPermissions: () => Promise.resolve(undefined),

    getIdentity: () => {
        const token = localStorage.getItem("token");
        const user = token ? JSON.parse(token) : null;
        return Promise.resolve(user);
    },
};

export default authProvider;
