
       

/**
 * <div id="parent">
 *    <div id="child1">
 *        <h1>I am h1 child</h1>
 *        <h2>I am h2 child</h2>
 *    </div>
 *    <div id="child2">
 *        <h1>I am h1 child</h1>
 *        <h2>I am h2 child</h2>
 *    </div>
 * </div>
 */        

 const heading = React.createElement("div",{id: "parent"},
                [ React.createElement("div",{id:"child1"},
                 [React.createElement("h1",{},"I am h1 child"), React.createElement("h2",{},"I am h2 child")]),
                 React.createElement("div",{id:"child1"},
                 [React.createElement("h1",{},"I am h1 child"), React.createElement("h2",{},"I am h2 child")])]);

                 const root = ReactDOM.createRoot(document.getElementById("root"));
                 root.render(heading);
                 console.log(heading);                