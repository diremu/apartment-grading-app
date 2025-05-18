import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../store/userSlice'

export default function SignupCustomer() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState({name: "", email: "", password: "", confirmPassword: ""})
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        const newErrors = {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
        if (name === "") {
            newErrors.name = "Name is required";
        }
        
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
        
        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        setError(newErrors);
        const hasErrors = Object.values(newErrors).some(error => error !== "");
        
        if (!hasErrors) {
            const newUser = {
                name,
                email,
                password,
                role: 'customer',
                createdAt: new Date().toISOString()
            };
            dispatch(signup(newUser));
            navigate('/');
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9fafb] px-4 py-8">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 md:p-10 flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Sign Up as a Customer</h2>
                <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className={`w-full px-4 py-3 rounded border ${error.name ? "border-red-500" : "border-gray-300"} focus:outline-none focus:border-[#a5b4fc] text-base`}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {error.name && <p className="text-red-500 text-xs mt-1">{error.name}</p>}
                    <input
                        type="email"
                        placeholder="Email Address"
                        className={`w-full px-4 py-3 rounded border ${error.email ? "border-red-500" : "border-gray-300"} focus:outline-none focus:border-[#a5b4fc] text-base`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error.email && <p className="text-red-500 text-xs mt-1">{error.email}</p>}
                    <input
                        type="password"
                        placeholder="Password"
                        className={`w-full px-4 py-3 rounded border ${error.password ? "border-red-500" : "border-gray-300"} focus:outline-none focus:border-[#a5b4fc] text-base`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error.password && <p className="text-red-500 text-xs mt-1">{error.password}</p>}
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className={`w-full px-4 py-3 rounded border ${error.confirmPassword ? "border-red-500" : "border-gray-300"} focus:outline-none focus:border-[#a5b4fc] text-base`}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {error.confirmPassword && <p className="text-red-500 text-xs mt-1">{error.confirmPassword}</p>}
                    <button type="submit" className="w-full py-3 rounded bg-[#a5b4fc] text-white font-semibold hover:bg-[#6366f1] transition-colors text-base mt-2">
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Already have an account? <Link to="/login" className="text-[#6366f1] underline">Log in</Link>
                </p>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Want to showcase properties instead? <Link to="/signup/owner" className="text-[#6366f1] underline">Sign up as an owner</Link>
                </p>
            </div>
        </div>
    )
}