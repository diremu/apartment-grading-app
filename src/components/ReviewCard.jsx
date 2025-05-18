export default function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 m-4 w-full selection:bg-transparent">
      <div className="p-5">
        <div className="mb-4 flex justify-center">
          <div className="bg-[#a5b4fc] rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-medium">
            {review.name.charAt(0)}
          </div>
        </div>
        <h3 className="font-bold text-xl text-gray-800 mb-2 text-center">
          {review.name}
        </h3>
        <div className="mt-4 bg-gray-200 p-4 rounded-lg">
          <p className="text-gray-700 italic">"{review.review}"</p>
        </div>
      </div>
    </div>
  );
}
