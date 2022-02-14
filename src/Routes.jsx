import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lazy from "./shared/components/Lazy";

import HomePage from "./pages/Home";
import DefaultLayout from "./layouts/DefaultLayout";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" index element={<HomePage />} />

      <Route
        path="/login"
        element={<Lazy element={React.lazy(() => import("./pages/Login"))} />}
      />

      <Route path="/auth" element={<DefaultLayout />}>
        <Route
          path="/auth/login"
          element={<Lazy element={React.lazy(() => import("./pages/Login"))} />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
