import styled, { css } from "styled-components";

export const Button = styled.button`
  background: transparent;
  border: none;
  margin: 0 0 0 20px;
  cursor: pointer;
  color: hsl(180, 100%, 25%);
  transition: color 0.3s;

  @media (max-width: 767px) {
    flex-basis: 100%;
    margin: 12px;
  }

  &:hover {
    color: hsl(180, 100%, 35%);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      color: #ccc;
      cursor: not-allowed;
    `}
`;
