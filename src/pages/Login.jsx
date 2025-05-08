import { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/userSlice';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({email: "", password: ""})
    const users = useSelector((state) => state.user.users);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function onSubmit(e) {
        e.preventDefault();
        const newErrors = {
            email: "",
            password: "",
        };
        if (email === "") {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
        }
        
        if (password === "") {
            newErrors.password = "Password is required";
        } else if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }
        

        const hasErrors = Object.values(newErrors).some(error => error !== "");
        
        if (!hasErrors) {
            const isExisting = users.filter((obj) => obj.email === email)
            console.log(isExisting)
            if (isExisting) {
                if (isExisting[0].password === password) {
                    dispatch(login({
                        user: isExisting.name
                    }))
                    navigate("/")
                }
            }
        }   
        
        setError(newErrors);
    }
    
    return (
        <div className="min-h-screen flex">
            <div className="md:block md:w-1/2 bg-[url('/assets/images/login-bg.jpg')] bg-cover bg-center">
                <div className="h-full w-full flex items-center justify-center">
                    <div className="text-black max-w-md p-10 bg-[#ffffff86]">
                        <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
                        <p className="text-lg">Log in to access your account and manage your property reviews.</p>
                    </div>
                </div>
            </div>
            
            <div className="w-full md:w-1/2 flex items-center justify-center bg-[#f9fafb] p-4">
                <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                    <div className="mb-6 text-center">
                        <Link to="/" className="text-2xl font-bold text-[#4f46e5]">Cozy Ratings</Link>
                        <h3 className="text-2xl font-bold mt-6 mb-2">Log In</h3>
                        <p className="text-gray-600">Enter your credentials to access your account</p>
                    </div>
                    
                    <form className="flex flex-col gap-5 mt-6" onSubmit={onSubmit}>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <Input 
                                id="email"
                                type="email" 
                                placeholder="you@example.com" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full"
                            />
                            {error.email && <p className="text-red-500 text-xs mt-1">{error.email}</p>}
                        </div>
                        
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <a href="#" className="text-xs text-[#4f46e5] hover:underline">Forgot password?</a>
                            </div>
                            <Input 
                                id="password"
                                type="password" 
                                placeholder="••••••••" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full"
                            />
                            {error.password && <p className="text-red-500 text-xs mt-1">{error.password}</p>}
                        </div>
                        
                        <Button 
                            type="submit" 
                            className="w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white py-2 mt-2"
                        >
                            Log In
                        </Button>
                    </form>
                    
                    <div className="mt-6 text-center text-sm">
                        <p className="text-gray-600">
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-[#4f46e5] hover:underline font-medium">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}