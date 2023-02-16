import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import kogo from "../asset/img/logo.jpg";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const loggedinUser = () => {
  //APUI call to check authentication
  return false;
};

const HeaderComponent = () => {
  const [isLoggedIn, setLoggedIn] = useState("false");

  //const [getLocalVariable, setLocalVariable] = useLocalStorage();

  const isOnline = useOnline();
  const { user } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  useEffect(() => {
    //console.log("useeffect");
  });
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <a href="/">
        <img className="h-28 p-2" alt="logo" src={kogo}></img>
      </a>
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>

          <Link to="/about">
            <li className="px-2">About</li>
          </Link>

          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="px-2">Cart-{cartItems.length}items</li>
          </Link>
        </ul>
      </div>
      {
        //javascript expression
        //let a=10;
        //console.log(a)'
        //its a statament both above let and console
        //console.log(a) is a expression
        //((a = 10), console.log(a))
      }
      {/* if (!isOnline) {
    return <h1>Offline, Please check your internent connection</h1>;
  } */}
      <h1>{isOnline ? "✅" : "🔴"} </h1>
      <span className="p-10 font-bold text-red-900">{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default HeaderComponent;
