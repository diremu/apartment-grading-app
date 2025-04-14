import ReviewBelt from "./ReviewBelt";
import { Reviews as reviews } from "./reviews.js";

export default function ReviewsComponent() {
    return (
        <div className="my-10">
            <h2 className="text-3xl font-bold text-center mb-6 bg-[url('src/assets/images/review-title.jpg')] bg-cover bg-center py-10">
                Customer Reviews
            </h2>
            <p className="italic text-[16px] mb-6">What Our Customers Say</p>
            <div className="flex justify-center">
                <ReviewBelt reviews={reviews} />
            </div>
        </div>
    );   
}