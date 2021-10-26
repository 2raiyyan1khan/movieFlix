import styled from "styled-components";

export const MainContent = styled.div`
  padding: 40px 0;
  text-align: center;
`;

export const ContentRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: auto;
  gap: 25px 20px;
`;
