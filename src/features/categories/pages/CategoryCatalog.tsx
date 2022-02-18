import { FC } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Text } from "../../../components";
import { addProduct } from "../../cart/cartSlice";
import { useGetProductsByCategoryQuery } from "../../catalog/catalogApi";
import ProductCard from "../../catalog/components/ProductCard";
import { ProductsContainer } from "../../catalog/pages/CatalogPage.styles";

const CategoryCatalogPage: FC = () => {
  const { category } = useParams();
  const dispatch = useDispatch();

  const { data: products, isFetching, error } = useGetProductsByCategoryQuery(category!);

  return (
    <ProductsContainer>
      {error && <Text>{error}</Text>}
      {isFetching && <Text>Loading...</Text>}
      {!isFetching &&
        products!.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={(p) => dispatch(addProduct({ ...p, quantity: 1 }))}
          />
        ))}
    </ProductsContainer>
  );
};

export default CategoryCatalogPage;
