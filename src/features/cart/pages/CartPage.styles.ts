import styled from "styled-components";

export const StickyContainer = styled.div`
  position: sticky;
  top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 4rem);
`;

export const CartProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
