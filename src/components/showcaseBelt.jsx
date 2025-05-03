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
  return (
    <Carousel opts={{
        loop: true,
        align: 'start',
        watchDrag: false
    }} className="w-[80%]">
      <CarouselContent>
        { properties.map((property, index) => (
              <CarouselItem key={index} className="basis-1/3" onClick={() => navigate(`/properties/${type}/${index}`)}>
                <div>
                  <Card apartment={property}  />
                </div>
              </CarouselItem>
            ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}
