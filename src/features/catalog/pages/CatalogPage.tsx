import { FC } from "react";
import { useDispatch } from "react-redux";

import { Text } from "../../../components";
import { addProduct } from "../../cart/cartSlice";
import { useGetProductsQuery } from "../catalogApi";
import ProductCard from "../components/ProductCard";
import { ProductsContainer } from "./CatalogPage.styles";

const CatalogPage: FC = () => {
  const dispatch = useDispatch();

  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <ProductsContainer>
      {error && <Text>{error}</Text>}
      {isLoading && <Text>Loading...</Text>}
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={(p) => dispatch(addProduct({ ...p, quantity: 1 }))}
          />
        ))}
    </ProductsContainer>
  );
};

export default CatalogPage;
