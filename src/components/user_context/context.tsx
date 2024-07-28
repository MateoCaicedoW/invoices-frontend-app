'use client';
import { createContext, useState } from 'react';
import { login } from '@/api/auth';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logout } from '@/lib/slices/auth';
import { hasCompany } from '@/api/companies';
export const UserContext = createContext({
    user: {
        id: '',
        company_id: '',
        first_name: '',
        last_name: '',
        email: '',
        token: '',
    },
    signIn: async (userInformation:{}) => {
        return {
            status: 0,
            data: []
        }
    },
    

    checkCompany: async (id: string, token: string) => {
        return {
            status: 0,
            data: []
        }
    },
    logoff: async () => {}
});

export default function UserProvider(
    {children}: {children: React.ReactNode}
) {

    const dispatch = useDispatch();
    const logoff = async () => {
        dispatch(logout())
    }
    const user = useSelector((state: any) => state.authReducer.user);
    const signIn = async (userInformation: {}) => {
        try {
            const response = await login(userInformation);
            if (response.status === 200) {
                const userData = {
                    id: response.data.user.id,
                    company_id: "",
                    first_name: response.data.user.first_name,
                    last_name: response.data.user.last_name,
                    email: response.data.user.email,
                    token: response.data.token
                }
                dispatch(loginSuccess(userData));
                
                return response;
            }

            return response;
        } catch (error: any) {
            return error.response;
        }
    }

    const checkCompany = async (id: string, token: string) => {

        try {
            const response = await hasCompany(
                id,
                token
            );
            if (response.status === 200) {
                return response;
            }

            return response;
        } catch (error: any) {
            return error.response;
        }
    }   

    return (
        <UserContext.Provider value={{user, signIn, checkCompany, logoff}}>
            {children}
        </UserContext.Provider>
    );
}{}