'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import ValidationErrors from "@/components/errors";
import { UserContext } from "@/components/user_context/context";
import withoutAuth from "@/components/withoutAuth";
import { loginCompanySuccess } from "@/lib/slices/auth";
import { useDispatch } from "react-redux";

const Login = () => {
    const {push} = useRouter();
    const [errors, setErrors] = useState([]);
    const {signIn, checkCompany} = useContext(UserContext);
    const dispatch = useDispatch();
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: any) => {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        });
    };

    const handleSignIn = async (e: any) => {
        e.preventDefault();
        const response = await signIn(userLogin);
        switch (response.status) {
            case 400:
                setErrors(response.data);  
                break;
            case 200:
                setErrors([]);                
                const r = await checkCompany(response.data.user.id, response.data.token);
                
                if (r.status === 404) {
                    push("/company/create");
                }

                if (r.status === 200) {
                    
                    const newUserData = {
                        ...response.data.user,
                        company_id: r.data.company_id,
                        token: response.data.token,
                    }
                    

                    dispatch(loginCompanySuccess(newUserData));
                    push("/dashboard");
                }

        }
    }

    return (
        <section className="h-full">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 h-full">
                <div className="w-full bg-white rounded-lg border  md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-black block w-full p-2 " placeholder="name@company.com" onChange={handleChange}/>
                                <ValidationErrors errors={errors} field="email" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2" onChange={handleChange}/>
                                <ValidationErrors errors={errors} field="password" />
                            </div>
                            <div className="flex items-center justify-between">
                                <a href="#" className="text-sm font-medium text-gray-500 hover:underline">Forgot password?</a>
                            </div>
                            <button onClick={handleSignIn} type="submit" className="w-full text-white  bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center ring-black">Sign in</button>
                            <p className="text-sm font-light text-gray-400">
                                Don't have an account yet? <Link href="/auth/signup" className="font-medium hover:underline">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default withoutAuth(Login);