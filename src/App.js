import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
//import About from "./components/About"; //default import
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import { lazy, Suspense, useState } from "react"; //named import
import Shimmer from "./components/Shimmer";
import Title from "./components/HeaderComponent";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

//import Instamart from "./components/Instamart";

/**  app layout should have
   * header
       -logo
       -navbar
   * body
   *    searchBar
   *    Restaurant card
            -image
            -rating
            -name
            -cusins
      footer
        -links
        -copyright
   */
const Instamart = lazy(() => import("./components/Instamart"));

//When you are loading your component in demarnd react suspends rendering.
//React does not know that i dont have instamart
//why did he load on reload
//once you have code in this browser it will load.
//
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Priyanka Kandalkar",
    email: "supportdev@gmail.com",
  });
  return (
    <div style={{ backgroundColor: "white" }}>
      <Provider store={store}>
        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}
        >
          <HeaderComponent />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Body
            user={{
              name: "Namaste React",
              email: "supportdev@gmail.com",
            }}
          />
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),

        children: [
          {
            path: "profile", //dont add / because router considering to take parent as about and then add profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//pasing react element(object) inide root

root.render(<RouterProvider router={appRouter} />);
