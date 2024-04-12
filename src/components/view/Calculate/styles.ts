import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  gap: 10px;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  font-size: 30px;
  width: 100px;
  height: 30px;
  border: none;
  border-bottom: grey 1px solid;
  margin-bottom: 20px;
`;
export const OperationButton = styled.button`
  padding: 10px 15px;
  border: none;
  margin: 10px;
  color: white;
  cursor: pointer;
  background-color: #86af49;
  &:hover {
    background-color: #405d27;
  }
  border-radius: 3px;
`;
export const Button = styled.button`
  padding: 20px;
  border: none;
  margin: 10px;
  cursor: pointer;
  width: 200px;
  color: white;
  background-color: #86af49;
  &:hover {
    background-color: #405d27;
  }
  border-radius: 3px;
`;
export const Select = styled.select`
  width: 200px;
  height: 40px;
`;
export const Option = styled.option`
  background-color: white;
`;
export const Title = styled.p`
  font-size: 30px;
  color: black;
  font-weight: bold;
`;
export const Label = styled.span`
  font-size: 20px;
  color: black;
`;
