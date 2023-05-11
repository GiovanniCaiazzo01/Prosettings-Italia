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
    props.width || props.width === 0 ? props.width + "px" : "100%"};
  ${(props) => props.maxWidth && "max-width:" + props.maxWidth + "px;"}
  height: ${(props) =>
    props.height || props.width === 0 ? props.height : "100%"};
  ${(props) => props.maxHeight && "max-height:" + props.height + "px;"}

  ${(props) => props.padding && "padding:" + props.padding + "px;"}
  ${(props) =>
    !props.padding &&
    props.paddingTop &&
    "padding-top:" + props.paddingTop + "px;"}
  ${(props) =>
    !props.padding &&
    props.paddingBottom &&
    "padding-bottom:" + props.paddingBottom + "px;"}
  ${(props) =>
    !props.padding &&
    props.paddingRight &&
    "padding-right:" + props.paddingRight + "px;"}
  ${(props) =>
    !props.padding &&
    props.paddingLeft &&
    "padding-left:" + props.paddingLeft + "px;"}


 ${(props) => props.margin && "margin:" + props.margin + "px;"}
    ${(props) =>
    !props.margin && props.marginTop && "margin-top:" + props.marginTop + "px;"}
  ${(props) =>
    !props.margin &&
    props.marginBottom &&
    "margin-bottom:" + props.marginBottom + "px;"}
  ${(props) =>
    !props.margin &&
    props.marginRight &&
    "margin-right:" + props.marginRight + "px;"}
  ${(props) =>
    !props.margin &&
    props.marginLeft &&
    "margin-left:" + props.marginLeft + "px;"}
`;
