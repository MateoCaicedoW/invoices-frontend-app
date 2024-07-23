'use client'
import { LogoutIcon } from '@/components/icons/icons'

export default function LogoutButton({onClick}: any) {
    
    return (
        <button onClick={onClick}>
            <LogoutIcon  height={30} width={30} /> 
        </button>
    )
}