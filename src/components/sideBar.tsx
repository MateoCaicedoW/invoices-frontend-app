'use client';
import {Modules, Module} from '@/utils/modules'
import Link from 'next/link';

const SideBar = () => {

    return (
        <aside className="bg-black h-full w-[350px] shadow-md">
            <div className="py-5 px-8 pt-8">
                <div className='bg-slate-900 h-[180px] flex justify-center flex-col items-center text-center rounded-[30px]'>
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
    )
}

export default SideBar