import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Landing from "./pages/landing.jsx";
import Context from "./Context/context.jsx";
import PetDesc from "./pages/petdesc.jsx";
import Login from "./pages/login.jsx";
import Favorite from "./pages/favorite.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Landing />} />
      <Route path="/:name" element={<PetDesc />} />
      <Route path="login" element={<Login />} />
      <Route path="favorite" element={<Favorite />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>
);
