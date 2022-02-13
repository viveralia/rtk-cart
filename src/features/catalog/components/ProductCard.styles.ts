import styled from "styled-components";

export const ProductContainer = styled.article`
  border-radius: 4px;
  padding: 1rem;
  display: grid;
  gap: 1rem;
  background-color: #fff;
`;

export const ProductTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #111;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

export const ProductDescription = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #444;
`;

export const ProductPrice = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
`;

export const ProductFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;
