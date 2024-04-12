import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  column-gap: 8px;
  height: 100%;
`;
export const Content = styled.h1``;

export const GoToLink = styled(Link)`
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
`;
