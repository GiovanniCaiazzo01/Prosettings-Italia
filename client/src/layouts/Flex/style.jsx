import styled from "styled-components";

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  ${(props) =>
    props.justifyContent && "justify-content:" + props.justifyContent + ";"}
  ${(props) => props.alignItems && "align-items:" + props.alignItems + ";"}
  width: ${(props) => (props.width ? props.width + "px;" : "100%;")}
  ${(props) => props.maxWidth && "max-width:" + props.maxWidth + "px;"}
  ${(props) => props.height && "height:" + props.height + "px;"}
  ${(props) => props.maxHeight && "max-height:" + props.height + "px;"}
`;
