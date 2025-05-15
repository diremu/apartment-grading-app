import Apartments from "../components/apartments";
import Condos from "../components/condos";
import Hotels from "../components/hotels";
import Houses from "../components/houses.jsx";

function PropertiesPage() {
  return (
    <div className="mt-6">
      <div id="header">
        <h2 className="text-3xl">
          Get a place to stay and feel at ease no matter where you go
        </h2>
        <p className="pt-3">
          Whether its an overnight stay turned into a weekend party,
          <br /> or official business tradings, we have options to choose from
        </p>
      </div>
      <div id="body">
        <div>
          <div>
            <Apartments />
          </div>
        </div>
        <div>
          <div>
            <Condos />
          </div>
        </div>
        <div>
          <div>
            <Houses />
          </div>
        </div>
        <div>
          <div>
            <Hotels />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertiesPage;
