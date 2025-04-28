import { useParams } from "react-router-dom"

export default function PropertyViewer() {
    const params = useParams()
    const propertyId = params.pid
    console.log(propertyId)
    return  (
        <div>
            a good property for a good customer {propertyId}
        </div>
    )
}