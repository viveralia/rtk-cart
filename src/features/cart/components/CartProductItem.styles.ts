import styled from "styled-components";
import { Button } from "../../../components";

export const CartProductItemContainer = styled.article`
  display: grid;
  grid-template-columns: 4rem 1fr 2rem;
  align-items: center;
  gap: 1rem;
`;

export const CartProductItemImg = styled.img`
  width: 100%;
  height: 4rem;
  object-fit: contain;
`;

export const CartProductItemName = styled.h3`
  font-size: 0.825rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CartProductItemBody = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CartProductItemButton = styled(Button)`
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0;
  height: 1.5rem;
  width: 1.5rem;
  background-color: #fff;
  border: 1px solid #ddd;
  color: #555;
  &:hover {
    background-color: #eee;
  }
`;
