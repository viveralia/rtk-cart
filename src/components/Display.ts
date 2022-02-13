import styled from "styled-components";

interface ContainerProps {
  bgColor?: string;
  boxShadow?: string;
}

export const Container = styled.section<ContainerProps>`
  background-color: ${(props) => props.bgColor};
  box-shadow: ${(props) => props.boxShadow};
  padding: 2rem;
  min-height: 100vh;
`;

Container.defaultProps = {
  bgColor: "#fff",
  boxShadow: "none",
};

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
