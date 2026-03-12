const Shimmer = () => {
    return (
        <div className="shimmer-container px-8 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {
                Array(9).fill("").map((_, index) => (
                    <div key={index} className="shimmer-card bg-white rounded-xl shadow-md overflow-hidden animate-pulse">

                        {/* Image Skeleton */}
                        <div className="shimmer-img h-40 w-full bg-gray-300"></div>

                        {/* Content Skeleton */}
                           <div className="shimmer-content p-4 space-y-3">
                              <div className="shimmer-line title h-4 bg-gray-300 rounded w-3/4"></div>
                              <div className="shimmer-line title h-3 bg-gray-300 rounded w-full"></div>
                              <div className="shimmer-line title h-3 bg-gray-300 rounded w-2/3"></div>
                           </div>
                        </div>
                ))}
        </div>
    );
};

export default Shimmer;