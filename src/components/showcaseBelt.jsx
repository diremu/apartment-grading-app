import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Card from "./card";

export default function ShowcaseBelt(properties) {
  const propertiess = properties.properties
  return (
    <Carousel opts={{
        loop: true,
        align: 'start',
        watchDrag: false
    }} className="w-[80%]">
      <CarouselContent>
        { propertiess.map((property, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <div>
                  <Card apartment={property} />
                </div>
              </CarouselItem>
            ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}
