import { BASE_URL } from './const'
export const fetcherGET = async (url: string, token: string) => {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": token
    }

    try {
        const response = await fetch(`${BASE_URL}${url}`, {
            method: "GET",
            headers: headers
        });
        return response;
    } catch (error: any) {
        return error.response;
    }
}

export const fetcherPOST = async (url: string, token:string, data: {}) => {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": token
    }
    try {
        const response = await fetch(`${BASE_URL}${url}`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        }).then(response => response.json());
        
        return response;
    } catch (error: any) {
        return error.response;
    }
}