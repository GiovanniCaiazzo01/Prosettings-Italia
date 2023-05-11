import styled from "styled-components";

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  ${(props) => props.padding && "padding:" + props.padding + "px;"}
  ${(props) => props.flexWrap && "flex-wrap: wrap;"}
  ${(props) =>
    props.justifyContent && "justify-content:" + props.justifyContent + ";"}
  ${(props) => props.alignItems && "align-items:" + props.alignItems + ";"}
  width: ${(props) =>
    props.width || props.width === 0 ? props.width : "100%"};
  ${(props) => props.maxWidth && "max-width:" + props.maxWidth + "px;"}
  height: ${(props) =>
    props.height || props.width === 0 ? props.height : "100%"};
  ${(props) => props.maxHeight && "max-height:" + props.height + "px;"}
`;
