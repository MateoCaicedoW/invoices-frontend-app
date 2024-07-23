'use client'


import { UserContext } from "@/components/user_context/context"
import withAuth from "@/components/withAuth"
import { useContext } from "react"
import DashoardLayout from "../../components/dashboardLayout"

const Dashboard = () => {
    const {auth, logoff} = useContext(UserContext)
    const handleLogout = () => {
        logoff()
    }

    return (
        <DashoardLayout>
            <div className="text-black">
                <h1>Hello {auth.user.first_name}</h1>
                <button onClick={handleLogout}>Log out</button>
            </div>
        </DashoardLayout>
    )
}

export default withAuth(Dashboard)






