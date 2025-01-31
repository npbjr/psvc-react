
import axios from 'axios';
import {LoginResponse, RegisterResponse, User} from '../interfaces'
const API_URL = 'http://127.0.0.1:3000/api/auth';


export const userClient = {
    login: async (email: string, password: string): Promise<LoginResponse> => {
        const response = await axios.post<LoginResponse>(`${API_URL}/login`, {
            email,
            password,
        });
        return response.data;
    },

    register: async (email: string, password: string, role: string): Promise<any> => {
        const response = await axios.post<any>(`${API_URL}/register`, {
            role,
            email,
            password,
        },{
            headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token") 
            }
        });
        
        return response;
    },

    
    getUsers: async (): Promise<any> => {
        const response = await axios.get<any>(`${API_URL}/users`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token") 
              }
        });
        return response
     
    },
    getUser: async (id: string): Promise<any> => {
        const response = await axios.get<any>(`${API_URL}/users/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token") 
              }
        });
        return response
     
    },
    delete: async (id: string): Promise<any> => {
        const response = await axios.delete(`${API_URL}/users/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token") 
              }
        });
        return response;
    },
    update: async (id:string, email: string, password: string, role: string): Promise<any> => {
        const response = await axios.patch<any>(`${API_URL}/users/${id}`, {
            role,
            email,
            password,
        },{
            headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token") 
            }
        });
        
        return response;
    },
};
