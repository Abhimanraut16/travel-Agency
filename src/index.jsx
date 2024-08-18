import React from "react";
import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>

  </React.StrictMode>

)