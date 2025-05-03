import { useParams } from "react-router-dom"
import { Properties } from "../properties"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"
import ReviewCard from "../ReviewCard"
import { useState, useEffect } from "react"

export default function PropertyViewer() {
    const params = useParams()
    const type = params.property
    if (type !== "houses" && type !== "apartments" && type !== "hotels" && type !== "condos") {
        return <div className="container mx-auto p-6 text-center">Invalid property type</div>
    }
    const propertyId = params.pid
    if (isNaN(propertyId) || propertyId < 0 || propertyId >= Properties[type].length) {
        return <div className="container mx-auto p-6 text-center">Invalid property ID</div>
    }
    const property = Properties[type][propertyId]
    const [reviewData, setReviewData] = useState([])
    
    useEffect(() => {
        if (property.users && property.ratings) {
            const reviews = property.users.map((user, index) => ({
                name: user,
                rating: property.ratings[index] || "✯✯✯",
                location: property.address,
                // duration: "~1 month",
                // review: `Review for ${property.name}`,
            }))
            setReviewData(reviews)
        }
    }, [property])

    return (
        <div className="bg-[#f9fafb] min-h-screen pb-8">
            <div className="bg-[#a5b4fc] text-white p-6 mb-6">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
                    <p className="text-lg">{property.address}</p>
                    <div className="mt-2 inline-block bg-white text-[#a5b4fc] px-3 py-1 rounded-full font-bold">
                        {property.avgRating}
                    </div>
                </div>
            </div>
            
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    {property.images && (
                        <Carousel 
                            opts={{
                                loop: true,
                                align: 'center',
                            }} 
                            className="w-full max-w-3xl mx-auto">
                            <CarouselContent>
                                {property.images.map((image, index) => (
                                    <CarouselItem key={index}>
                                        <div className="h-64 md:h-80 p-2">
                                            <img
                                                src={image}
                                                alt={`${property.name} - image ${index + 1}`}
                                                className="object-cover w-full h-full rounded-lg shadow-md"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious  />
                            <CarouselNext  />
                        </Carousel>
                    )}
                </div>
                
                <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4 border-b-2 border-[#a5b4fc] pb-2">{type.charAt(0).toUpperCase() + type.slice(1, -1)} Details</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <p><span className="font-semibold">Address:</span> {property.address}</p>
                        <p><span className="font-semibold">Rating:</span> {property.avgRating}</p>
                    </div>
                </div>
                
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4 border-b-2 border-[#a5b4fc] pb-2">Guest Reviews</h2>
                    
                    {reviewData.length > 0 ? (
                        <Carousel 
                            opts={{
                                loop: true,
                                align: 'start',
                            }} 
                            className="w-full">
                            <CarouselContent>
                                {reviewData.map((review, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                        <ReviewCard review={review} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious  />
                            <CarouselNext  />
                        </Carousel>
                    ) : (
                        <p className="text-center p-4 bg-white rounded-lg">No reviews available</p>
                    )}
                </div>
                
                <div className="bg-[#a5b4fc] text-white p-6 rounded-lg text-center">
                    <h3 className="font-bold text-xl mb-2">Interested in this property?</h3>
                    <button className="bg-white text-[#a5b4fc] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    )
}