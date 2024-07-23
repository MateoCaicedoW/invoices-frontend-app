const BASE_URL = 'http://localhost:8080/auth';
import axios from 'axios';


//create a ts interface for the response
export async function signUp(data: any) {
    try {
        const response = await axios.post(`${BASE_URL}/signup`, data);
        return response;
    } catch (error : any) {
        return error.response;
    }
}


export async function login(data: any) {
    try {
        const response = await axios.post(`${BASE_URL}/login`, data);
        return response;
    } catch (error : any) {
        return error.response;
    }
}


