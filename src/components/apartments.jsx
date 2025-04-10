import {Properties as apartments} from './properties.js'
import ShowcaseBelt from './showcaseBelt.jsx'

export default function Apartments() {
    const apartmentList = apartments.apartments
    return (
        <div>
            <h2 className="text-3xl py-2 font-semibold">Apartments</h2>
            <p className="text-[16px] italic">Our Highly Rated Apartments</p>
            <div className="flex flex-wrap justify-center">
                <ShowcaseBelt properties={apartmentList} />
            </div>
        </div>
    )
}