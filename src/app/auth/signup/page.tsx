'use client';
import Link from "next/link";
import { signUp } from "@/api/auth";
import { useState } from "react";
import ValidationErrors from "@/components/errors";
import { useRouter } from "next/navigation";
import withoutAuth from "@/components/withoutAuth";

const SignUp = () => {
    const {push} = useRouter();
    const [userInformation, setUserInformation] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [errors, setErrors] = useState([]);

    const handleChange = (e: any) => {
        setUserInformation({
            ...userInformation,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const response = await signUp(userInformation);
        switch (response.status) {
            case 400:
                setErrors(response.data);  
                break;
            case 201:
                // Clear the errors
                setErrors([]);
                push("/auth/login");

        }
    };

    return (
        <section className="h-full">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 h-full">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                <input type="text" name="first_name" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jhon" onChange={handleChange} required/>
                                <ValidationErrors errors={errors} field="first_name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                <input type="text" name="last_name" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" onChange={handleChange}  required/>
                                <ValidationErrors errors={errors} field="last_name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" onChange={handleChange}  required/>

                                <ValidationErrors errors={errors} field="email" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange}  required/>
                                <ValidationErrors errors={errors} field="password" />
                            </div>

                            <div>
                                <label htmlFor="password-confirmation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm your password</label>
                                <input type="password" name="password_confirmation" id="password-confirmation" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange}  required/>
                                <ValidationErrors errors={errors} field="password_confirmation" />
                            </div>
                            <div className="flex gap-2 w-full">
                                <button type="submit" className="text-white w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmit}>Sign up</button>
                            </div>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Do you have an account? <Link href="/auth/login" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign in</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default withoutAuth(SignUp)