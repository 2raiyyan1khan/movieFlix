import styled from "styled-components";

export const StyledFooter = styled.footer`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.header};
  font-size: 0.8em;
  padding: 10px 0;
  & span:first-child {
    margin-right: 0.8em;
  }
`;
