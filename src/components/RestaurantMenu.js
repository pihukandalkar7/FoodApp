import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, restaurantList } from "../Config";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  //to fetch dynamic id use useParams()
  // const params = useParams();
  // console.log(params);

  const { id } = useParams();

  //const [ restraurant, setRestaurant] = useState(null);
  console.log(useState());

  const restraurant = useRestaurant(id);
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem("Grapes")); //assuming {payload:"grapes"}
  };
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  return !restraurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>Restaurant id:{id}</h1>
        <h2>{restraurant?.name}</h2>
        <img src={IMG_CDN_URL + restraurant?.cloudinaryImageId} />
      </div>
      <div className="p-5"></div>
      <h1>Menu</h1>
      <div className="">
        <button
          className="p-2 m-2 bg-green-100"
          onClick={() => handleAddItem()}
        >
          Add Item
        </button>
      </div>
      <div className="menu-container">
        <ul>
          {Object.values(restraurant?.menu?.items).map((item) => (
            <li key={item.id}>
              {item.name}{" "}
              <button
                className="p-1 bg-green-500 flex"
                onClick={() => addFoodItem(item)}
              >
                Add Item
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
