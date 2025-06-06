import {Properties as apartments} from './properties.js'
import ShowcaseBelt from './showcaseBelt.jsx'

export default function Apartments() {
    const apartmentList = apartments.apartments
    return (
        <div>
            <h2 className="text-3xl text-[#f9fafb] font-semibold bg-[url('/assets/images/apartment-title.jpg')] mt-6 bg-cover bg-center py-10">Apartments</h2>
            <p className="text-[16px] italic my-3">Our Highly Rated Apartments</p>
            <div className="flex flex-wrap justify-center">
                <ShowcaseBelt properties={apartmentList} type="apartments" />
            </div>
        </div>
    )
}