import Card from "./card";
import { Properties as houses } from "./properties.js";

export default function Houses() {
    const houseList = houses.houses.slice(0,4);

    return(
        <div>
            <h2>Houses</h2>
            <p>Our Highly Rated Houses</p>
            <div className="flex flex-wrap justify-center">
                {houseList.map((house, index) => (
                    <Card key={index} {...house} />
                ))}
            </div>
        </div>
    )
}