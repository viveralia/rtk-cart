import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Container, Header, Text } from "../../components";
import CartPage from "../../features/cart/pages/CartPage";
import { useGetCategoriesQuery } from "../../features/categories/categoriesApi";
import { AppContainer } from "../App.styles";
import { HomeLink, NavLinks, StyledNavLink } from "./AppLayout.styles";

const AppLayout: FC = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery();

  return (
    <AppContainer>
      <Container>
        <Header>
          <HomeLink to="/">React-commerce</HomeLink>
          {isLoading && <Text>...</Text>}
          <NavLinks>
            {categories &&
              categories.map((category) => (
                <StyledNavLink key={category} to={encodeURIComponent(category)}>
                  {category}
                </StyledNavLink>
              ))}
          </NavLinks>
        </Header>
        <Outlet />
      </Container>
      <CartPage />
    </AppContainer>
  );
};

export default AppLayout;
