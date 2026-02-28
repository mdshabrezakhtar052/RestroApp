const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {
                Array(9).fill("").map((_, index) => (
                    <div key={index} className="shimmer-card">
                        <div className="shimmer-img"></div>
                           <div className="shimmer-content">
                              <div className="shimmer-line title"></div>
                              <div className="shimmer-line title"></div>
                              <div className="shimmer-line title"></div>
                           </div>
                        </div>
                ))}
        </div>
    );
};

export default Shimmer;