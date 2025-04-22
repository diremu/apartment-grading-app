import ShowcaseBelt from './showcaseBelt.jsx'
import { Properties as houses } from "./properties.js";

export default function Houses() {
    const houseList = houses.houses
    console.log(houseList)
    return(
        <div>
            <h2 className="text-3xl font-semibold bg-[url('/assets/images/houses-title.jpg')] bg-cover bg-center py-10">Houses</h2>
            <p className="italic text-[16px]">Our Comfortable and Modern Houses</p>
            <div className="flex flex-wrap justify-center">
                <ShowcaseBelt properties={houseList} />
            </div>
        </div>
    )
}