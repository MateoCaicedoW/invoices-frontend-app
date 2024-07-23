'use client'
import { useSelector } from "react-redux";
import Login from "./auth/login/page";
import Dashboard from "./dashboard/page";

export default function Home() {
    const loggedIn = useSelector((state: any) => state.authReducer.loggedIn);
    if (!loggedIn) {
        history.pushState(null, "", "/auth/login");
        return <Login />;
    }

    history.pushState(null, "", "/dashboard");
    return <Dashboard />;
}