import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Card from "./card";
import { useNavigate } from "react-router-dom";

export default function ShowcaseBelt({properties, type}) {
  const navigate = useNavigate();
  const isMobile = window.innerWidth <=  425  ;
  console.log(isMobile)
  return (
    <Carousel opts={{
        loop: true,
        align: 'start',
        watchDrag: isMobile
    }} className="w-full md:w-[80%] flex justify-center">
      <CarouselContent>
        { properties.map((property, index) => (
              <CarouselItem key={index} className="md:basis-auto" onClick={() => navigate(`/properties/${type}/${index}`)}>
                <div>
                  <Card apartment={property}  />
                </div>
              </CarouselItem>
            ))}
      </CarouselContent>
      <CarouselNext className="hidden md:flex" />
      <CarouselPrevious className="hidden md:flex" />
    </Carousel>
  );
}
