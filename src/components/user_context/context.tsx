'use client';
import { createContext, useState } from 'react';
import { login } from '@/api/auth';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logout } from '@/lib/slices/auth';
export const UserContext = createContext({
    auth: {
        token: '',
        user:{
            id: '',
            first_name: '',
            last_name: '',
            email: '',
        }
    },
    
    signIn: async (userInformation:{}) => {
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
    const auth = useSelector((state: any) => state.authReducer.user);
    const signIn = async (userInformation: {}) => {
        try {
            const response = await login(userInformation);
            if (response.status === 200) {
                dispatch(loginSuccess(response.data))
                
                return response;
            }

            return response;
        } catch (error: any) {
            return error.response;
        }
    }

    return (
        <UserContext.Provider value={
            {auth, signIn, logoff}
        }>
            {children}
        </UserContext.Provider>
    );
}{}