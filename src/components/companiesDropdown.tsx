'use client'
import { companiesForUser } from "@/api/companies";
import  { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
const CompaniesDropdown = () => {
    const user = useSelector((state: any) => state.authReducer.user);
    const [items, setItems] = useState([{
        name: "",
        id: "",
    }]);
    useEffect(() => {
        const getCompanies = async () => {
            const response = await companiesForUser(user.id, user.token)
            if (response.status === 200) {
                setItems(response.data)
            }
        } 

        getCompanies();  
    }, []);



    //Logic for dropdown
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event:any) => {
            if (ref.current && !ref.current?.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref])

    return (
        <div>
            <div className="relative inline-block text-left" ref={ref}>
                <div>
                    <button onClick={toggle} type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none " id="options-menu" aria-expanded="true" aria-haspopup="true">
                        Options
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                    </button>
                </div>
            {
                isOpen ? (
                    <div className="absolute mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" >
                        <div className="py-1" role="none">
                            {items.map((item, index) => (
                                <a key={index} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">{item.name}</a>
                            ))}
                        </div>
                    </div>
                ) : null
            }
            </div>
        </div>
    )
}


export default CompaniesDropdown