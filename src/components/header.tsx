import LogoutButton from "@/components/logoutButton";
import { UserContext } from "@/components/user_context/context";
import {Avatar} from "@nextui-org/avatar";
import { useContext } from "react";

const Header = ({children} : {children: React.ReactNode}) => {
    const {auth, logoff} = useContext(UserContext)
    const handleLogout = () => {
        logoff()
    }

    return (
        <section className="w-full flex flex-col">
            <div className="bg-white shadow-lg">
                <div className="px-5 py-4 flex justify-end">
                    <div className="flex items-center">
                        <div className="flex items-center gap-4 pr-5">
                            <Avatar isBordered radius="md" size="sm" showFallback/>
                            <div className="flex flex-col">
                                <span className="text-black text-sm">{auth.user.first_name} {auth.user.last_name}</span>
                                <span className="text-black text-xs">{auth.user.email}</span>
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
    )
}

export default Header;

