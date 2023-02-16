import React from "react";
import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../Config";

const useRestaurant = (id) => {
  //if we were passing  empty object in initial render so we were getting items not defined error.
  //to overcome this we have given null and also  we can give early return or use shimmer

  //const [restraurant, setRestaurant] = useState({});

  const [restraurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);

    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }
  //return restaurant data
  return restraurant;
};

export default useRestaurant;
