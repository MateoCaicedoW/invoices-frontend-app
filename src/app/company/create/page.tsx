'use client'
import { createCompany } from "@/api/companies";
import ValidationErrors from "@/components/errors";
import { UserContext } from "@/components/user_context/context";
import withAuth from "@/components/withAuth";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginCompanySuccess } from '@/lib/slices/auth';

const CreateCompanyPage = () => {
    const [errors, setErrors] = useState([]);
    const {logoff} = useContext(UserContext);
    const user = useSelector((state: any) => state.authReducer.user);
    const [companyInformation, setCompanyInformation] = useState({
        name: `${user.first_name} Company`,
    }) 
    const {push} = useRouter();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        await logoff();
    }
    
    const handleChange = (e: any) => {
        setCompanyInformation({
            ...companyInformation,
            [e.target.name]: e.target.value
        });
    }

    const handleCreate = async (e: any) => {
        e.preventDefault();
        const response = await createCompany(companyInformation, user.token);

        console.log(response)
        if (response.status === 400) {
            setErrors(response.data);
        }

        if (response.status === 200) {
            setErrors([]);
            const newUserData = {
                ...user,
                company_id: response.data.id,
            }
            dispatch(loginCompanySuccess(newUserData));
            push("/dashboard");
        }
    }

    return (
        <section className="h-full">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 h-full">
                <div className="w-full bg-white rounded-lg border  md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Create company
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-black block w-full p-2 " placeholder="Company Name" onChange={handleChange} value={companyInformation.name} autoFocus />
                                <ValidationErrors errors={errors} field="name" />
                            </div>

                            <button type="submit" onClick={handleCreate} className="w-full text-white  bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center ring-black">Create</button>
                            <div className="w-full text-center">
                                <a onClick={handleLogout} className="hover:underline text-xs text-gray-400 cursor-pointer">Sign in with another account</a>
                            </div>
                        </form>
                    </div>
                </div>
                <span className="text-center pt-2 text-gray-400 text-xs">
                    Companies are the spaces where you can create your
                    <br /> invoices, manage your clients and products.
                </span>
            </div>
        </section>
    )
}

export default withAuth(CreateCompanyPage)