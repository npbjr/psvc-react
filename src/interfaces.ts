export interface User {
    _id: number;
    email: string;
    password: string;
    role: string;
}

export interface LoginResponse {
    accessToken: string;
    statusCode: number;
}

export interface RegisterResponse {
    user: User;
}

export interface AccountsResponse {
    accounts:User[]
}