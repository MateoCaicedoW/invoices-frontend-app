'use client'

import Login from "@/app/auth/login/page";
import { useSelector } from "react-redux";

export default function withAuth(Component: React.FC) {
    return function AuthComponent() {
        const loggedIn = useSelector((state: any) => state.authReducer.loggedIn);

        if (!loggedIn) {
            history.pushState(null, "", "/auth/login");
            return <Login />;
        }

        return <Component />;
    }
}