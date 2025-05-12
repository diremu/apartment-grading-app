import {Properties} from './properties.js'
import ShowcaseBelt from './showcaseBelt.jsx'

export default function Condos() {
    const condoList = Properties.condos
    return (
        <div>
            <h2 className="text-3xl text-[#f9fafb] font-semibold bg-[url('/assets/images/apartment-title.jpg')] mt-6 bg-cover bg-center py-10">Condos</h2>
            <p className="text-[16px] italic">Our Comfy Condos</p>
            <div className="flex flex-wrap justify-center">
                <ShowcaseBelt properties={condoList} type="condos" />
            </div>
        </div>
    )
}