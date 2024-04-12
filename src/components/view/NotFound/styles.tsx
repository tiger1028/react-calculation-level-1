import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 10px;
  flex-direction: column;
`;

export const ErrorTitle = styled.div`
  font-size: 70px;
  color: rgb(214, 13, 80);
  font-weight: bold;
`;

export const NotExistText = styled.div`
  font-size: 30px;
  font-weight: bold;
  line-height: 36px;
`;

export const NotFoundText = styled.div`
  font-size: 20px;
  color: rgb(156 163 175);
  line-height: 20px;
`;

export const GoToHomePage = styled(Link)`
  margin-top: 16px;
  border: 1px transparent;
  border-radius: 8px;
  color: white;
  background-color: rgb(37, 99, 235);
  padding: 20px;
  text-decoration: none;
  &:focus {
    outline: none;
  }

  &:active {
    background-color: rgb(37, 99, 235);
  }

  &:hover {
    background-color: rgb(29, 78, 216);
  }
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;
