
import axios from 'axios';
const API_URL = 'http://127.0.0.1:3000/lotto';


export const commentsClient = {
    

    create: async (commentsData:any): Promise<any> => {
        const response = await axios.post<any>(`${API_URL}/create`, {...commentsData},{
            headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token") 
            }
        });
        
        return response;
    },

    
    findAll: async (searchText:string): Promise<any> => {
     
        const params = {
            searchText
        };   

        const response = await axios.get<any>(`${API_URL}/result`, {
           params ,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token") 
              }
        });
        return response
     
    },
    findById: async (id: string): Promise<any> => {
        const response = await axios.get<any>(`${API_URL}/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token") 
              }
        });
        return response
    },
    searchBy: async (searchText: string): Promise<any> => {
        const response = await axios.get<any>(`${API_URL}/result/search`, {
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
    update: async (commentsData:any): Promise<any> => {
        const response = await axios.patch<any>(`${API_URL}/${commentsData.id}`, {...commentsData},{
            headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token") 
            }
        });
        
        return response;
    },
};
