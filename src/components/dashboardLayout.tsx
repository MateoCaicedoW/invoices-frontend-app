'use client'
import {Modules, Module} from '@/utils/modules'
import Link from 'next/link';
import LogoutButton from "./logoutButton";
import { useContext } from "react";
import { UserContext } from "./user_context/context";
import { Avatar } from "@nextui-org/avatar";
import { useSelector } from 'react-redux';
import CompaniesDropdown from './companiesDropdown';
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const {logoff} = useContext(UserContext)
    const user = useSelector((state: any) => state.authReducer.user)
    const handleLogout = () => {
        logoff()
    }

    return (
        <div className="flex h-screen">
            <aside className="bg-black h-full w-[250px] shadow-md">
                <div className="py-5 px-3 pt-8">
                    <div className='bg-slate-900 h-[130px] flex justify-center flex-col items-center text-center rounded-[30px]'>
                    <h1 className="text-white text-[18px] ">Razonate</h1>
                    </div>
            
                    <div className='pt-5'>
                        <div className='flex flex-col gap-3'>
                            {Modules.map((module: Module, index: number) => (
                                <Link key={index} href="" className='px-5 py-2 hover:bg-slate-900 rounded-xl flex items-center gap-2 duration-300 ease-in-out'>
                                    <module.Icon className='text-white' />
                                    <span className="text-white text-sm">{module.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>

            <section className="w-full flex flex-col">
                <div className="bg-white shadow-lg">
                    <div className="px-5 py-4 flex justify-between">
                        <CompaniesDropdown />
                        <div className="flex items-center">
                            <div className="flex items-center gap-4 pr-5">
                                <Avatar isBordered radius="md" size="sm" showFallback/>
                                <div className="flex flex-col">
                                    <span className="text-black text-sm">{user.first_name} {user.last_name}</span>
                                    <span className="text-black text-xs">{user.email}</span>
                                </div>
                            </div>
                            
                            <LogoutButton onClick={handleLogout} />
                        </div>
                    </div>
                </div>
                <div className="bg-slate-200 p-6 h-full overflow-auto">
                    {children}
                </div>
            </section>
        </div>
    )
}