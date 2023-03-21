import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 5px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  color: white;
  margin: 10px;
`;

export const DoneButton = styled(Button)`
  background: green;
  &:hover {
    background: hsl(120, 100%, 30%);
    transition: 0.3s;
    cursor: pointer;
  }
`;

export const RemoveButton = styled(Button)`
  background: red;
  &:hover {
    background: hsl(0, 100%, 60%);
    transition: 0.3s;
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: teal;
`;
