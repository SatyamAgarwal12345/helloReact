import React from "react";
import ReactDOM from "react-dom/client";
const divs = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am hi tag"),
    React.createElement("h2", {}, "i am h2 tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divs);
