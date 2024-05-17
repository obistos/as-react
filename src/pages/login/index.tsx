import Link from "next/link";
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiService from '../api/data';
import AuthHeader from '../../components/auth-header.component';

type Login = {
    username: string;
    password: string;
}

const emptyForm = {
    username: '',
    password: ''
}

export default function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState<Login>(emptyForm);
    

    const isValid = () => formData.username === '' || formData.password === '';

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        // ApiService.userLogin(formData)
        // .then((response: any) => {
        //     if(response && response.data) {
        //         const user = response.data;
        //         window.sessionStorage.setItem('jwtToken', btoa(JSON.stringify(user)))
        //         toast.success("Logged in successfully!");
        //         setTimeout(() => {
        //             router.push('food/1', { scroll: false });
        //         }, 2000);
        //     } else if(response && response.error) {
        //         toast.success(response.error.message);
        //     }
        // })
        // .catch((err: any) => {
        //     toast.success(err.error.message);
        // })

        // Bypass code since DB is not working
        window.sessionStorage.setItem('jwtToken', btoa(JSON.stringify({
            username: 'obyr',
            email: 'obedr@example.com',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ0ODU3NzIxLCJleHAiOjE2NDc0NDk3MjF9.vgGXR0SZhXZ1ozrkI3_AJFr1dOA1wHLGVg5hi2UIolo',
        })))
        toast.success("Logged in successfully!");
        setTimeout(() => {
            router.push('food/1', { scroll: false });
        }, 2000);
    }
    
    return (
        <>
            <AuthHeader title="Login"/>
            <main className="flex min-h-screen flex-col items-center bg-white p-5 pt-20">
                <img 
                    className="relative self-end" 
                    src="/man.png" 
                    width={150}
                    height={300}
                    alt="Man holding grocery" />
                <form onSubmit={onSubmit} className="w-full">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">username</label>
                        <input 
                            name="username"
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            type="text" 
                            placeholder="muncher"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">password</label>
                        <input 
                            name="password"
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            type="password" 
                            placeholder="your password"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex items-center">
                        <button className="bg-obed-light hover:bg-obed-dark text-white font-bold py-2 px-4 rounded w-full disabled:opacity-50" type="submit" disabled={isValid()}>Login</button>
                    </div>
                    <div className="text-center">
                        <Link className="inline-block align-baseline text-sm text-light hover:text-dark" href="/register">Don't have an account? <b>Register</b></Link>
                    </div>
                </form>
            </main>
            <ToastContainer position="top-center" />
        </>
    )
}