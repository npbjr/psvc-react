
import axios from 'axios';
const API_URL = 'http://127.0.0.1:3000/comments';


export const commentsClient = {
    

    create: async (name: string, comment: string, pageId: string): Promise<any> => {
        const response = await axios.post<any>(`${API_URL}/create`, {
            name,
            comment,
            pageId,
        },{
            headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token") 
            }
        });
        
        return response;
    },

    
    getComments: async (): Promise<any> => {
        const response = await axios.get<any>(`${API_URL}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token") 
              }
        });
        return response
     
    },
    getComment: async (id: string): Promise<any> => {
        const response = await axios.get<any>(`${API_URL}/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token") 
              }
        });
        return response
     
    },
    delete: async (id: string): Promise<any> => {
        const response = await axios.delete(`${API_URL}/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token") 
              }
        });
        return response;
    },
    update: async (id:string, email: string, password: string, role: string): Promise<any> => {
        const response = await axios.patch<any>(`${API_URL}/${id}`, {
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
