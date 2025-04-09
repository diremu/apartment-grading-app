import {Properties as apartments} from './properties.js'
import Card from './card.jsx'

export default function Apartments() {
    const apartmentList = apartments.apartments.slice(0,4)
    console.log(apartmentList)
    return (
        <div>
            <h2>Apartments</h2>
            <p>Our Highly Rated Apartments</p>
            <div className="flex flex-wrap justify-center">
                {apartmentList.map((apartment, index) => (
                    <Card key={index} {...apartment} />
                ))}
            </div>
        </div>
    )
}