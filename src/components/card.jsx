export default function Card(props) {
    const property = props.apartment || props;
    //this is supposed to help with an issue i faced regarding the properties not being passed correctly to the card component.
    return (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 m-4 w-80 selection:bg-transparent">
            <div className="p-5">
                <h3 className="font-bold text-xl text-gray-800 mb-2">{property.name}</h3>
                <p className="text-gray-600 mb-3">
                    {property.address}
                </p>
                <p className="text-[#a5b4fc] text-lg font-semibold mb-2">{property.ratings}</p>
                <div className="pt-3 border-t border-gray-100 flex items-center">
                    <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-700 font-medium">
                        {property.user ? property.user.charAt(0) : "?"}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Reviewed by {property.user}</span>
                </div>
            </div>
        </div>
    )
}