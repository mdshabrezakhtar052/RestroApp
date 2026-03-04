import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../Utils/constants";

const RestroMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const { resid } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resid);
        const json = await data.json();
        setResInfo(json.data);
    };

    // ✅ Loading guard
    if (!resInfo) {
        return <Shimmer />;
    }

    // ✅ Restaurant Info
    const info = resInfo?.cards?.[2]?.card?.card?.info;
    const { name, cuisines, costForTwoMessage } = info || {};

    // ✅ Get Regular Cards Safely
    const regularCards = resInfo?.cards
        ?.find(card => card.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    // ✅ Find section that contains itemCards
    const itemSection = regularCards?.find(
        c => c?.card?.card?.itemCards
    );

    const itemCards = itemSection?.card?.card?.itemCards;

    // ✅ If still no items
    if (!itemCards) {
        return <Shimmer />;
    }

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")}</p>
            <h3>{costForTwoMessage}</h3>

            <h2>Menu</h2>

            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - Rs.
                        {(item.card.info.price ||
                          item.card.info.defaultPrice) / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestroMenu;