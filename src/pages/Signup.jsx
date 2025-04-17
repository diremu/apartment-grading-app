import { useNavigate } from "react-router-dom"

export default function Signup() {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h3 className="text-3xl font-bold text-center mb-6">Sign Up</h3>
                <p className="text-lg text-center mb-8">What are you planning on doing?</p>
                <div className="flex flex-col space-y-4">
                    <button 
                        onClick={() => navigate("/signup/customer")} 
                        className="bg-[#4f46e5] text-white py-3 px-6 rounded-lg hover:bg-[#4338ca] transition-colors"
                    >
                        Review Properties
                    </button>
                    <button 
                        onClick={() => navigate("/signup/owner")}
                        className="bg-[#4f46e5] text-white py-3 px-6 rounded-lg hover:bg-[#4338ca] transition-colors"
                    >
                        Showcase Properties
                    </button>
                </div>
            </div>
        </div>
    )
}