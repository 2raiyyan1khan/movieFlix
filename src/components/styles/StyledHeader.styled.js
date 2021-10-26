import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.header};

  text-align: center;
  padding: 60px 0 30px;
`;
export const StyledHeading = styled.h1`
  display: inline-block;
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 700;
  border-bottom: 3px solid #eebbc3;
`;
export const SearchBox = styled.div`
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 50px;
  border: 3px solid #eebbc3;
  overflow: hidden;
  transition: 0.5s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 8px 15px;
  & button {
    cursor: pointer;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    font-size: inherit;
    color: white;
  }
  &:hover {
    opacity: 0.98;
    transform: scale(0.98);
  }
`;
export const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  flex: 1;
  border: none;
  font-size: inherit;
  font-weight: bold;
  color: white;
  background: transparent;
  outline: none;

  &::placeholder {
    color: white;
    opacity: 0.7;
  }
`;
