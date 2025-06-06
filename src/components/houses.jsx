import ShowcaseBelt from './showcaseBelt.jsx'
import { Properties as houses } from "./properties.js";

export default function Houses() {
    const houseList = houses.houses
    return(
        <div>
            <h2 className="text-3xl font-semibold bg-[url('/assets/images/houses-title.jpg')] bg-cover bg-center py-10">Houses</h2>
            <p className="italic text-[16px] my-3">Our Comfortable and Modern Houses</p>
            <div className="flex flex-wrap justify-center">
                <ShowcaseBelt properties={houseList} type="houses" />
            </div>
        </div>
    )
}