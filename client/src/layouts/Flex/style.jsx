import styled from "styled-components";

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.columns ? "column" : "row")};
  ${(props) =>
    props.justifyContent && "justify-content:" + props.justifyContent + ";"}
  ${(props) => props.alignItems && "align-items:" + props.alignItems + ";"}
  width: ${(props) => (props.width ? props.width + "px;" : "100%;")}
  ${(props) => props.maxWidth && "max-width:" + props.maxWidth + "px;"}
`;
