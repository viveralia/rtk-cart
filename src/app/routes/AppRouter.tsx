import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CatalogPage from "../../features/catalog/pages/CatalogPage";
import CategoryCatalogPage from "../../features/categories/pages/CategoryCatalog";
import AppLayout from "../components/AppLayout";

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<CatalogPage />} />
          <Route path=":category" element={<CategoryCatalogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
