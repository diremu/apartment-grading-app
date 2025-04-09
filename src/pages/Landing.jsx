import Navbar from '../components/Navbar'
import Apartments from '../components/apartments'
import Houses from '../components/houses'

export default function Landing() {
    return (
        <div className="bg-[#f9fafb] min-h-screen">
            <Navbar/>
            {/* //secondary - [#a5b4fc] */}
            <div className="text-[#111827] py-4 flex flex-col items-center justify-center mt-20">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-8">Find the Perfect Place <br/> —Backed by Real Reviews, Not Guesswork.</h1>
                    <div className="w-full max-w-2xl mx-auto mt-4">
                        <input type="text" placeholder="Search By Country, Housing Type or Color Scheme" className="w-full px-6 py-4 text-lg font-semibold rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#a5b4fc] shadow-sm" />
                    </div>
                </div>
            </div>
            <Apartments />
            <Houses />
        </div>
    )
}