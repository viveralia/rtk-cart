import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  opacity: 0.75;

  &[class*="active"] {
    font-weight: 600;
    opacity: 1;
    text-decoration: underline;
  }
`;

export const HomeLink = styled(Link)`
  color: #111;
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
`;
