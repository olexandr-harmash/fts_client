import React from "react";
import { Routes, Route } from 'react-router-dom';
import { ROOT, LOGIN } from "./constants";
import NotFound from "../pages/notFound";
import Home from "../pages/home";

const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route
          exact
          path={ROOT}
          element={<Home />} />
        <Route
          exact
          path={LOGIN}
          element={<NotFound />} />
        <Route
          exact
          path='*'
          element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default RouterConfig;