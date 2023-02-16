import { useState } from "react";
import { restaurantList } from "../Config";
import { filterData } from "../utils/Utils";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";

const Body = () => {
  const [searchText, setSearchText] = useState(); //to create state variable
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  console.log("render");
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    // console.log("call this when dependency changed");
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.9319821&lng=77.7523039&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //optional chaining suppose data is not thre it will break
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  //  const isOnline = useOnline();

  /* if (!isOnline) {
    return <h1>Offline, Please check your internent connection</h1>;
  } */

  //if restaurant is empty=>shimmer Ui
  //If restaurant has data =>Actuak data UI
  //early return to avoid component rendering
  if (!allRestaurants)
    return <h1>not rendering all restaurants because API have no data</h1>;
  //retunn null

  //if (filterRestaurants?.length === 0) return <h1>No restro match filter</h1>;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5 ">
        <input
          type="text"
          className="focus:bg-green-200 p-2 m-2"
          placeholder="search"
          value={searchText}
          onChange={
            (e) => {
              setSearchText(e.target.value);
              // console.log(searchText);
            } //whatever you write in input
          }
        ></input>
        {/* <h1>{searchClicked}</h1> */}
        <button
          className="search-button p-2 m-2 bg-purple-600 hover:bg-purple-900 text-white rounded-md"
          onClick={(e) => {
            // if (searchClicked === "true") {
            //   setSearchClicked("false");
            // } else {
            //   setSearchClicked("true");
            // }
            //need to filter data and then update state -restaurants variable
            const data = filterData(searchText, allRestaurants);

            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          type="text"
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        ></input>
        <input
          type="text"
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        ></input>
      </div>
      <div className="flex flex-wrap">
        {filterRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.data.id}
            key={restaurant.data.id}
          >
            <RestaurantCard {...restaurant.data}></RestaurantCard>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
