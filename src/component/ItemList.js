// import { CDN_URL } from "../Utils/constants";

// const ItemList = ({items}) => {
//     console.log("items",items);
//     return (
//         <div>
//             {items.map((item) =>(
//                 <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex">
//                    <div>
//                    <div className="py-2">
//                         <p className="font-medium text-s text-gray-700">{item.card.info.name}</p>
//                         <p className="text-s text-gray-700">₹{item.card.info.price / 100}</p>
//                         <p className="text-xs text-gray-500">{item.card.info.description}</p>
//                     </div>
//                    </div>
//                    <div>
//                        <img src={CDN_URL + item.card.info.imageId}  className="w-14"/>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
//     // <div> Category Items</div>;
// };

// export default ItemList;

import { CDN_URL } from "../Utils/constants";

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item) => {
                const info = item?.card?.info;

                return (
                    <div
                        key={info?.id}
                        className="p-4 border-b border-gray-200 flex justify-between items-start gap-4"
                    >
                        {/* LEFT SIDE (TEXT) */}
                        <div className="w-9/12 text-left">

                            <p className="font-semibold text-gray-800">
                                {info?.name}
                            </p>

                            <p className="text-sm text-gray-700 mt-1">
                                ₹{(info?.price || info?.defaultPrice) / 100}
                            </p>

                            <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                                {info?.description}
                            </p>

                        </div>

                        {/* RIGHT SIDE (IMAGE + BUTTON) */}
                        <div className="w-3/12 relative">

                            <img
                                src={CDN_URL + info?.imageId}
                                alt={info?.name}
                                className="w-full h-24 object-cover rounded-lg"
                            />

                            {/* ADD BUTTON */}
                            <button className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-green-600 font-bold px-6 py-1 rounded-md shadow-md border cursor-pointer hover:bg-gray-200 ">
                                ADD
                            </button>

                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;