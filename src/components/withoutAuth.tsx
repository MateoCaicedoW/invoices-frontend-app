'use client'

import { useSelector } from "react-redux";
import Dashboard from '@/app/dashboard/page';
export default function withoutAuth(Component: React.FC) {
    return function AuthComponent() {

        const loggedIn = useSelector((state: any) => state.authReducer.loggedIn);
        if (loggedIn) {
            history.pushState(null, "", "/dashboard");
            return <Dashboard />;
        }

        return <Component />;
    }
}