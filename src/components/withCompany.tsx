'use client'
import { useSelector } from "react-redux";
import CreateCompanyPage from "@/app/company/create/page";

export default function withCompany(Component: React.FC) {
    return function AuthComponent() {
        const loggedIn = useSelector((state: any) => state.authReducer.loggedIn);
        const loggedInWithCompany = useSelector((state: any) => state.authReducer.loggedInWithCompany);

        if (loggedIn && !loggedInWithCompany) {
            history.pushState(null, "", "/company/create");
            return <CreateCompanyPage />;
        }
        

        return <Component />;
    }
}