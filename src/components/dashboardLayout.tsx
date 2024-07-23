'use client'
import Header from "@/components/header";
import SideBar from "@/components/sideBar";
export default function DashoardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen">
            <SideBar />

            <Header>
                {children}
            </Header>
        </div>
    )
}