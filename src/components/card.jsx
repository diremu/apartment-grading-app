import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export default function Card(props) {
  const property = props.apartment || props;
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 m-4 w-80 selection:bg-transparent">
      <div className="p-5">
        <Carousel>
          <CarouselContent>
            {property.images.map((image, index) => (
              <CarouselItem key={index} className="w-full h-48">
                <img
                  src={image}
                  alt={`Property ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <h3 className="font-bold text-xl text-gray-800 mb-2">
          {property.name}
        </h3>
        <p className="text-gray-600 mb-3">{property.address}</p>
        <p className="text-[#a5b4fc] text-lg font-semibold mb-2">
          {property.avgRating}
        </p>
        <div className="pt-3 border-t border-gray-100 flex items-center">
          <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-700 font-medium">
            {property.users ? property.users[0].charAt(0) : "?"}
          </div>
          <span className="ml-2 text-sm text-gray-600 text-wrap">
            Reviewed by {property.users[0]} +{property.users.length - 1} others
          </span>
          {/* since i dont have a full solution as of now, let me use bandages to cover up for now */}
        </div>
      </div>
    </div>
  );
}
