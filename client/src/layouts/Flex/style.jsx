import styled from "styled-components";

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.columns ? "column" : "row")};
`;
