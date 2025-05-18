import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import ReviewCard from "./ReviewCard";

export default function ReviewBelt({ reviews }) {
  const isMobile = window.innerWidth <= 425;
  
  return (
    <Carousel opts={{
        loop: true,
        align: 'start',
        watchDrag: isMobile
    }} className="w-full md:w-[80%] flex justify-center items-center">
      <CarouselContent>
        {reviews.map((review, index) => (
          <CarouselItem key={index} className="md:basis-auto min-w-0 max-w-full flex justify-center items-center">
            <div className="flex justify-center items-center">
              <ReviewCard review={review} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="hidden md:flex" />
      <CarouselPrevious className="hidden md:flex"/>
    </Carousel>
  );
}