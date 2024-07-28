'use client'
import DashoardLayout from "@/components/dashboardLayout"
import withAuth from "@/components/withAuth"
import withCompany from "@/components/withCompany"

const Invoices = () => {
    return (
        <DashoardLayout>
            <div className="text-black">
                <h1>Invoices</h1>
            </div>
        </DashoardLayout>
    )
}

export default withCompany(withAuth(Invoices))
