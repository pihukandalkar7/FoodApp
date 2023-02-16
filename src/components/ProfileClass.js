import React from "react";

class ProfileClass extends React.Component {
  //This is only mandatory method in class comp

  constructor(props) {
    super(props);
    //this is best place to create state whenever you load the class constructor will be called first
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "dummy location",
      },
    };
    console.log(" child constructor" + this.props.name);
    //first constructor call
    //component rende
    //thne componentDid mount
  }

  async componentDidMount() {
    console.log("componentDidMount" + this.props.name);
    //this will be called after render
    //now this is known as
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
   
    console.log("ComponentDidUpdate"); //did means after updatating
  }

  componentWillUnmount() {
    console.log("component wil unmount");
  }

  render() {
    //return some jsx
    const { count } = this.state; //we can destructure it
    console.log("render" + this.props.name);
    return (
      <div>
        <h1>profile class comp</h1>
        <img src={this.state?.userInfo?.avatar_url} />
        <h2>Name: {this.state?.userInfo?.name}</h2>
        <h3>Location:{this.state?.userInfo?.location}</h3>

        <button
          onClick={() =>
            this.setState({
              count: 1,
            })
          }
        ></button>
      </div>
    );
  }
}

export default ProfileClass;
