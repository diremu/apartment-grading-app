import {Outlet} from "react-router-dom";

export default function PropertyCatalogue() {
    return (
        <div>
            <h2>Houses sections</h2>
            <Outlet />
        </div>
    )
}