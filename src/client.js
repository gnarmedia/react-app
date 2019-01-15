import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";

const app = document.getElementById("app");
ReactDOM.hydrate(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
  app
);
