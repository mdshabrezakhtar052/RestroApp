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
         <div className="res-card" style={styleCard}>
             <img 
             className="res-img"
             alt="res-img"
             src={CDN_URL + resData.info.cloudinaryImageId} />
 
             {/* Using API */}
             <h3>{name}</h3>
             <h5>{cuisines.join(", ")}</h5>
             <h5>rating: {avgRating}</h5>
             <h5>Price: {costForTwo}</h5> 
         </div>
     );
 };

 export default RestroCard;