import Navbar from "../components/Navbar";
import Apartments from "../components/apartments";
import Houses from "../components/houses";
import Reviews from "../components/reviews.jsx";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="bg-[#f9fafb] min-h-screen text-[#111827]">
      <Navbar />
      {/* //secondary - [#a5b4fc] */}
      <div className=" py-4 flex flex-col items-center justify-center mt-20">
        <div className="text-center">
          <h1 className="text-4xl mb-8">
            Find the <span className="font-bold">Perfect Place</span> <br />{" "}
            —Backed by{" "}
            <span className="underline font-bold">Real Reviews</span>,{" "}
            <br /> Not{" "}
            <span className=" decoration-wavy underline font-bold">Guesswork</span>
          </h1>
          <p className="text-center text-wrap text-[16px] font-[500]">
            Whether it's an overnight stay, a weekend event, or a life-changing
            decision, <br /> you can rely on us to consistently deliver unparalleled
            quality.
          </p>
          <br />
          <div className="w-full max-w-2xl mx-auto mt-4">
            <input
              type="text"
              placeholder="Search By Country, Housing Type or Color Scheme"
              className="w-full px-6 py-4 text-lg font-semibold rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#a5b4fc] shadow-sm"
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-3xl font-bold">
          Our <span className="px-2 bg-[#a5b4fc]">Featured</span> Properties
        </h3>
        <Apartments />
        <Houses />
      </div>
      <Reviews />
      <Footer />
    </div>
  );
}
