import styled from "styled-components";

export const MainForm = styled.form`
  display: flex;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  color: white;
  background-color: hsl(180, 100%, 25%);
  border: none;
  padding: 10px;
  margin-left: 20px;

  &:hover {
    background-color: hsl(180, 100%, 30%);
    transform: scale(1.1);
    transition: 0.5s;
    cursor: pointer;
  }

  &:active {
    background-color: hsl(180, 100%, 35%);
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    margin-left: 0;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ddd;

  &:active {
    border: solid 1px #000;
  }
`;
