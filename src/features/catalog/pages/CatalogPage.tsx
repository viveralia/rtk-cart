import { FC, useEffect, useState } from "react";

import { Container, Header, Text, Title } from "../../../components";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/product";
import { ProductsContainer } from "./CatalogPage.styles";

const CatalogPage: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        setError("Couldn't get the products");
      } finally {
        setIsLoading(false);
      }
    };

    getAllProducts();
  }, []);

  return (
    <Container>
      <Header>
        <Title>React-commerce</Title>
      </Header>
      <ProductsContainer>
        {error && <Text>{error}</Text>}
        {isLoading && <Text>Loading...</Text>}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={console.log} />
        ))}
      </ProductsContainer>
    </Container>
  );
};

export default CatalogPage;
