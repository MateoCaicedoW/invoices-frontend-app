import axios from "axios";
import { BASE_URL } from "./const";


export async function hasCompany(id: string, token: string) {
    try {
        
        const response = await axios.get(`${BASE_URL}has-company/${id}`, {
            headers: {
                "Authorization": token
            }
        });
        return response;
    } catch (error : any) {
        return error.response;
    }
}


export async function createCompany(data: any, token: string) {
    try {
        const response = await axios.post(`${BASE_URL}create-company`, data, {
            headers: {
                "Authorization": token
            }
        });
        return response;
    } catch (error : any) {
        return error.response;
    }
}


export async function companiesForUser(id: string, token: string) {
    try {
        const response = await axios.get(`${BASE_URL}companies/${id}/all`, {
            headers: {
                "Authorization": token
            }
        });
        return response;
    } catch (error : any) {
        return error.response;
    }
}
