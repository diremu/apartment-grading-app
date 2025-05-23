import { Properties } from './properties.js'
import ShowcaseBelt from './showcaseBelt.jsx'

export default function Hotels() {
    const hotelList = Properties.hotels
    return (
        <div className="bg-white">
            <h2 className="text-3xl text-[#f9fafb] font-semibold bg-[url('/assets/images/hotel-banner.jpg')] mt-6 bg-cover bg-center py-10">Hotels</h2>
            <p className="text-[16px] italic my-3">Our Prestigious Hotels</p>
            <div className="flex flex-wrap justify-center">
                <ShowcaseBelt properties={hotelList} type="hotels" />
            </div>
        </div>
    )
}