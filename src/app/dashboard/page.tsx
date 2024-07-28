'use client'


import withAuth from "@/components/withAuth"
import withCompany from "@/components/withCompany"
import { useContext } from "react"
import { UserContext } from "@/components/user_context/context"
import DashboardLayout from "@/components/dashboardLayout"

const Dashboard = () => {
    const {logoff} = useContext(UserContext)
    const handleLogout = () => {
        logoff()
    }


    return (
        <DashboardLayout>
            <div className="text-black">
                <h1>Dashboard</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </DashboardLayout>
    )
}

export default withCompany(withAuth(Dashboard))






