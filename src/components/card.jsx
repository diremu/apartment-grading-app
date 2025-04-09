export default function Card(apartment) {
    let userInitial = apartment.user[0]
    return (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 m-4 w-80">
            <div className="p-5">
                <h3 className="font-bold text-xl text-gray-800 mb-2">{apartment.name}</h3>
                <p className="text-gray-600 mb-3">
                    {apartment.address}
                </p>
                <p className="text-[#a5b4fc] text-lg font-semibold mb-2">{apartment.ratings}</p>
                <div className="pt-3 border-t border-gray-100 flex items-center">
                    <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-700 font-medium">
                        {userInitial}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Reviewed by {apartment.user}</span>
                </div>
            </div>
        </div>
    )
}