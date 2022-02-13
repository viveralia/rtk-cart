import styled from "styled-components";

export const Container = styled.section`
  background-color: #8f6593;
  padding: 2rem;
  min-height: 100vh;
`;

export const ProductsContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
