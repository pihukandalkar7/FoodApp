import React, { useEffect } from "react";
import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    //API call
    //console.log("useeffect");
  });
  //console.log("render");
  return (
    <div>
      profile
      <h3>{props.name}</h3>
      <h3>Counnt: {count}</h3>
      <button
        onClick={() => {
          setCount(1);
          setCount2(2);
        }}
      >
        setcount
      </button>
    </div>
  );
};

export default Profile;
