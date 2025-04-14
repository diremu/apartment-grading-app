import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import ReviewCard from "./ReviewCard";

export default function ReviewBelt({ reviews }) {
  return (
    <Carousel opts={{
        loop: true,
        align: 'start',
        watchDrag: false
    }} className="w-[80%]">
      <CarouselContent>
        {reviews.map((review, index) => (
          <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
            <div>
              <ReviewCard review={review} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}