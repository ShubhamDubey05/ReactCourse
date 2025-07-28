import styled from "styled-components";

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 14px 28px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    background-color: #388e3c;
  }
`;

export const Outline = styled(Button)`
  background-color: transparent;
  border: 2px solid #f44336;
  color: #f44336;

  &:hover {
    background-color: #f44336;
    color: white;
  }
`;
