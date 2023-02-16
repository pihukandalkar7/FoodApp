//super power of React to create element
const heading1 = React.createElement("h1", {
    id: "title"
}, "Heading1");
const heading2 = React.createElement("h1", {
    id: "title2",
    className: "Class"
}, "Heading2");
const container = React.createElement("div", {
    id: "container"
}, [
    heading1,
    heading2
]);
//multiple children need to pass in array
//the above code is not developer friendly also complicated creating elemnts.
// React will write whole html into javascript(React.createElement core of React) that is why this is js
//i.e is why JsX came in ..it makes more easy
//what createElement gave us..React element nooting but object of type h1
//console.log(heading);
//we are modifying root in DOM now by using ReactDOM.createRoot api
//react need to know where to put so there is root
//you will have always single root
//all app one root and one render method
const root = ReactDOM.createRoot(document.getElementById("root"));
//pasing react element(object) inide root
root.render(container); //

//# sourceMappingURL=index.6bd02f5a.js.map
