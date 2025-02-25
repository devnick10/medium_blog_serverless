import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { SingupInput } from '@devnick1010/medium-common';
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../config/config";


export const Auth = ({ type }: { type: "signup" | "signin" }) => {

    const navigate = useNavigate()

    const [userInputs, setUserInputs] = useState<SingupInput>({
        name: "",
        email: "",
        password: ""
    })

    ///    TODO : Clear the sendRequest funtion 
    const sendRequest = async () => {
        try {

            const request = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,userInputs)

            const jwt = request.data.token
            
            localStorage.setItem("token",JSON.stringify(jwt))
             
            navigate("/blogs")
            toast.success(request.data.message)
        } catch (error:unknown) {
            
            console.log(error);
            toast.error(`${type ==="signin"?"Sign in":"Sign up"} failed try again.`) 
            if (error instanceof AxiosError) {
            
                toast.error(error.message)
            }   

 
        }
    }

    return (
        <div className="min-h-dvh flex flex-col justify-center">
            <div className="flex justify-center">
                <div>

                    <div className="py-2 px-10 mb-2">
                        <h1 className="text-4xl font-bold">{type === "signin" ? "Sign in to account" : "Create an account"}</h1>
                        <h3 className="text-xl text-slate-600">
                            {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                            <Link className="pl-2 underline font-semibold" to={type === "signin" ? "/signup" : "/signin"}>
                                {type === "signin" ? "Sign up" : "Sign in"}
                            </Link>
                        </h3>
                    </div>
                    <div className="p-1.5">

                        {type === "signup" && <LabeledInput label="Username" placeholder="Username" onChange={(e) => {
                            setUserInputs(prev => ({ ...prev, name: e.target.value }))
                        }
                        } />}
                        <LabeledInput label="Email" placeholder="Email" onChange={(e) => {
                            setUserInputs(prev => ({ ...prev, email: e.target.value }))
                        }
                        } />
                        <LabeledInput label="password" type="password" placeholder="password" onChange={(e) => {
                            setUserInputs(prev => ({ ...prev, password: e.target.value }))
                        }
                        } />

                        <button onClick={sendRequest} type="button" className="w-full text-white mt-2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                            {
                                type === "signup" ? "Sign up" : "Sign in"
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface LabelInputType {
    placeholder: string
    label: string
    type?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function LabeledInput({ label, type, onChange, placeholder }: LabelInputType) {
    return <div className="mb-2 ">
        <label className="block mb-2 text-md font-bold text-gray-700 pt-2">{label}</label>
        <input onChange={onChange} type={type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
    </div>
}

