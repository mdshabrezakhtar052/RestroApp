import { CDN_URL } from "../Utils/constants";

// Apply CSS 
const styleCard = {
    backgroundColor: "#f0f0f0",
};

const RestroCard = (props) => {
    console.log(props);
    const {resData} = props;
    // Destructure - Object Data
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo} = resData?.info
 
     // Destructure props - Another way to do
     const {rating, delivery} = props;
 
     return (
         <div className="res-card m-4 w-64 rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer" style={styleCard}>
             <img 
             className="res-img w-full h-40 object-cover"
             alt="res-img"
             src={CDN_URL + resData.info.cloudinaryImageId} />
 
             {/* Using API */}
             <div className="p-3">
             <h3 className="font-bold text-lg truncate">{name}</h3>
             <p className="text-gray-600 text-sm truncate">{cuisines.join(", ")}</p>
             <div className="flex justify-between items-center mt-2">
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                ⭐️ {avgRating}
                </span>
                <span className="text-gray-700 text-sm font-medium">
                {costForTwo}
                </span>
             </div>
        
             </div>
            
         </div>
     );
 };

 export default RestroCard;