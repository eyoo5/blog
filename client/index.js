import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import "..public/index.css";
import Root from "./components/Root";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Root />
  </Provider>
);
