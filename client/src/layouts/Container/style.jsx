import styled from "styled-components";

export const StyledContainer = styled.div`
  ${(props) => props.flex && "display: flex"};
  ${(props) => props.flex && props.column && "flex-direction: column"};
  padding: 20px;
  margin: 20px;
  background-color: #fff;
`;
