import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import { Component } from "react";
import userContext from "../utils/userContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
    //initialize state in constructour and it
  }

  componentDidMount() {
    //Best place to make an apicall
    console.log(" parent componentDidMount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1 class="font-bold text-md text-xl">About us page</h1>
        <userContext.Consumer>
          {(value) => console.log(value)}
        </userContext.Consumer>
        <userContext.Consumer>
          {({ user }) => (
            <h1 className="font-bold p-10 text-xl">
              {user.name}-{user.email}
            </h1>
          )}
        </userContext.Consumer>
        <h1 class="font-bold text-sm text-100xl">let me tell you about page</h1>
        <p>This is namste react live cpurse chapeter 07 finding path</p>
        <Outlet />
        <ProfileClass name={"first child"} xyz="abc" />

        <ProfileFunctionalComponent
          name={"Akshay"}
        ></ProfileFunctionalComponent>
      </div>
    );
  }
}

export default About;
