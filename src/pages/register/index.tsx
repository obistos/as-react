import Link from "next/link";
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiService from '../api/data';
import AuthHeader from '../../components/auth-header.component';

type Register = {
    username: string;
    email: string;
    password: string;
}

const emptyForm = {
    username: '',
    email: '',
    password: ''
}

export default function Register() {
    const router = useRouter();
    const [formData, setFormData] = useState<Register>(emptyForm);
    const [errors, setErrors] = useState<Register>(emptyForm);

    const hasErrors = () => errors.username !== '' || errors.email !== '' || errors.password !== ''
    const isIncomplete = () => formData.username === '' || formData.email === '' || formData.password === ''

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors(validateForm(name, value));
    }

    const validateForm = (name: string, value: string) => {
        const error = {
            username: '',
            email: '',
            password: ''
        };
 
        if (name === 'username' && !value.trim()) {
            error.username = 'Username is required';
        }
 
        if (name === 'email' && !value.trim()) {
            error.email = 'Email is required';
        } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            error.email = 'Email is invalid';
        }
 
        if (name === 'password' && !value) {
            error.password = 'Password is required';
        } else if (name === 'password' && value.length < 8) {
            error.password = `Password must be at 
            least 8 characters long`;
        }
 
        return error;
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        ApiService.userRegistration(formData)
        .then((response: any) => {
            if(response && response.data) {
                toast.success("Registered successfully!");
                setTimeout(() => {
                    router.push('login', { scroll: false });
                }, 2000);
            } else if(response && response.error) {
                toast.success(response.error.message);
            }
        })
        .catch((err: any) => {
            toast.success(err.error.message);
        })
    }

    return (
        <>
            <AuthHeader title="Register"/>
            <main className="flex min-h-screen flex-col items-center bg-white p-5 pt-20">
                <img 
                    className="relative self-end" 
                    src="/lady.png" 
                    width={150}
                    height={300}
                    alt="Lady holding grocery" />
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
                        <p className="text-red-500 text-xs italic">{(errors.username)}</p>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">email</label>
                        <input 
                            name="email"
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            type="text" 
                            placeholder="yourmail@mail.com"
                            onChange={handleChange}
                        />
                        <p className="text-red-500 text-xs italic">{errors.email}</p>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">password</label>
                        <input 
                            name="password"
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            type="password" 
                            placeholder="your password"
                            onChange={handleChange}
                        />
                        <p className="text-red-500 text-xs italic">{errors.password}</p>
                    </div>

                    <div className="flex items-center">
                        <button className="bg-obed-light hover:bg-obed-dark text-white font-bold py-2 px-4 rounded w-full disabled:opacity-50" type="submit" disabled={hasErrors() || isIncomplete()}>Register</button>
                    </div>
                    <div className="text-center">
                        <Link className="inline-block align-baseline text-sm text-light hover:text-dark" href="/login">Have an account? <b>Login</b></Link>
                    </div>
                </form>
            </main>
            <ToastContainer position="top-center" />
        </>
    )
}