import styled from "styled-components";

export const MainSection = styled.section`
  box-shadow: 2px -2px 5px 0px #dddddd;
  background-color: white;
  margin: 10px 0;
`;

export const Title = styled.h2`
  padding: 20px;
  font-size: 20px;
  margin: 0;
`;

export const Header = styled.header`
  border-bottom: 1px solid #ddd;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  grid-gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

export const SectionBody = styled.div`
  padding: 10px;
`;
