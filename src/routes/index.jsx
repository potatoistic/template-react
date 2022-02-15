import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Lazy from "../shared/components/Lazy";

import HomePage from "../pages/Home";

import DefaultLayout from "../layouts/DefaultLayout";
import PrivateLayout from "../layouts/PrivateLayout";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" index element={<HomePage />} />

      {/* 
        Example of lazy loading a component.
      */}
      <Route
        path="/login"
        element={<Lazy element={React.lazy(() => import("../pages/Login"))} />}
      />

      {/* 
        Example of nested routes.
      */}
      <Route path="/auth" element={<DefaultLayout />}>
        <Route
          path="/auth/login"
          element={<Lazy element={React.lazy(() => import("../pages/Login"))} />}
        />
      </Route>

      {/* 
        Example for private and secured route with nested routes.
      */}
      <Route path="/dashboard" element={<PrivateLayout />}>
        <Route
          index
          element={<Lazy element={React.lazy(() => import("../pages/Home"))} />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;