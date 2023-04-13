import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "../public/index.css";
import store from "./store";
import Root from "./component/Root";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Root />
  </Provider>
);
