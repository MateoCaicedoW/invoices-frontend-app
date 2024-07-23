'use client'


import { UserContext } from "@/components/user_context/context"
import withAuth from "@/components/withAuth"
import { useContext } from "react"

const Dashboard = () => {
    const {auth} = useContext(UserContext)


    return (
        <div>
            <h1>Invoices</h1>
        </div>
    )
}

export default withAuth(Dashboard)






