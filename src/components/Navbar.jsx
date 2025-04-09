export default function Navbar() {
    return (
        <div className="bg-[#4f46e5] text-white">
            <nav className="flex items-center mx-2 justify-between">
                <p className=" text-[24px] basis-1/3 text-left">Cozy Ratings</p>
                <ul className="flex w-[50%] justify-around list-none items-center">
                    <li className="hover:bg-[#6366f1] text-[18px] py-1 px-3 border-t-0 border-[1px] border-solid rounded-tl-none rounded-tr-none border-[#f9fafb] rounded"><button onClick={() => alert("Under Construction!")}>Ratings</button></li>
                    <li onClick={() => alert("Under Construction!")} className="text-[18px]"><button>Review</button></li>
                    <li><button className="font-light text-[18px] underline">Sign Up</button></li>
                    <li className="border-[#f9fafb] border border-solid rounded px-3 py-1 text-[18px]"><button>Log In</button></li>
                </ul>
            </nav>
        </div>
    )
}