import Apartments from "../components/apartments";
import Condos from "../components/condos";
import Hotels from "../components/hotels";
import Houses from "../components/houses.jsx";

function PropertiesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9fafb] px-4 py-8">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 md:p-10 flex flex-col items-center mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Properties
        </h2>
        <div id="header" className="text-center">
          <h2 className="text-3xl">
            Get a place to stay and feel at ease no matter where you go
          </h2>
          <p className="pt-3">
            Whether its an overnight stay turned into a weekend party,
            <br /> or official business tradings, we have options to choose
            from
          </p>
        </div>
        <div id="body" className="w-full mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center items-center w-full">
            <Apartments />
          </div>
          <div className="flex justify-center items-center w-full">
            <Condos />
          </div>
          <div className="flex justify-center items-center w-full">
            <Houses />
          </div>
          <div className="flex justify-center items-center w-full">
            <Hotels />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertiesPage;
