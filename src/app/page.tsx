'use client'
import { useSelector } from "react-redux";
import Login from "./auth/login/page";
import Dashboard from "@/app/dashboard/page";
import CreateCompanyPage from "./company/create/page";
export default function Home() {
    const loggedIn = useSelector((state: any) => state.authReducer.loggedIn);
    const loggedInWithCompany = useSelector((state: any) => state.authReducer.loggedInWithCompany);
    if (!loggedIn) {
        history.pushState(null, "", "/auth/login");
        return <Login />;
    }

    if (loggedIn && loggedInWithCompany) {
        history.pushState(null, "", "/dashboard");
        return <Dashboard />;
    }

    if (loggedIn && !loggedInWithCompany) {
        history.pushState(null, "", "/company/create");
        return <CreateCompanyPage />;
    }

}