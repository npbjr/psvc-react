
import axios from 'axios';
const API_URL = 'http://127.0.0.1:3000/pages';


export const pageClient = {

    generatePage: async (id:string): Promise<any> =>{
        const response = await axios.post<any>(`${API_URL}/generate`, {
            id,
        },{
            headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token") 
            }
        });
    },
    

    create: async (pageData:any): Promise<any> => {
        const response = await axios.post<any>(`${API_URL}/create`, {...pageData},{
            headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token") 
            }
        });
        
        return response;
    },

    
    getPages: async (): Promise<any> => {
        const response = await axios.get<any>(`${API_URL}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token") 
              }
        });
        return response
     
    },
    getPage: async (id: string): Promise<any> => {
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
    update: async (pageData:any): Promise<any> => {
        const response = await axios.patch<any>(`${API_URL}/${pageData.id}`, {...pageData},{
            headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token") 
            }
        });
        
        return response;
    },
};
