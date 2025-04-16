import { Link } from 'react-router-dom'

export default function SignupOwner() {
    return (
        <div className="min-h-screen bg-[#f9fafb] flex flex-col">
            <div className="bg-[#4f46e5] text-white p-4">
                <Link to="/" className="text-[24px] font-medium">Cozy Ratings</Link>
            </div>
            
            <div className="flex-1 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center mb-6">Property Owner Signup</h2>
                    <p className="text-gray-600 mb-6 text-center">Create an account to showcase your properties</p>
                    
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a5b4fc]" 
                                placeholder="John Doe" 
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a5b4fc]" 
                                placeholder="john@example.com" 
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name (Optional)</label>
                            <input 
                                type="text" 
                                id="company" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a5b4fc]" 
                                placeholder="Your Company" 
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a5b4fc]" 
                                placeholder="••••••••" 
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                            <input 
                                type="password" 
                                id="confirmPassword" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a5b4fc]" 
                                placeholder="••••••••" 
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            className="w-full bg-[#a5b4fc] text-white py-2 px-4 rounded-md hover:bg-[#818cf8] transition-colors"
                        >
                            Create Owner Account
                        </button>
                    </form>
                    
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account? <a href="#" className="text-[#4f46e5] hover:underline">Log in</a>
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                            Want to review properties instead? <Link to="/signup/customer" className="text-[#4f46e5] hover:underline">Sign up as a customer</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}