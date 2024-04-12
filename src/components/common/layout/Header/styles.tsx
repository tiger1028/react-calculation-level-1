import styled from "styled-components";
import { Link } from "react-router-dom";
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  position: fixed;
  top: 0px;
  height: 60px;
  width: 100%;
  background-color: rgb(67, 57, 202);
`;

export const WebsiteTitle = styled(Link)`
  font-size: 30px;
  line-height: 30px;
  font-weight: bold;
  color: white;
  text-decoration: none;

  @media (max-width: 520px) {
    font-size: 20px;
  }
`;
