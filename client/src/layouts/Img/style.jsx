import styled from "styled-components";

export const StyledImg = styled.img`
  width: ${(props) => props.width && props.width}px;
  height: ${(props) => props.height && props.height}px;
  ${(props) => props.margin && "margin:" + props.margin + "px;"}
  ${(props) => props.marginTop && "margin-top:" + props.marginTop + "px;"}
  ${(props) =>
    props.marginBottom && "margin-bottom:" + props.marginBottom + "px;"}
  ${(props) => props.marginLeft && "margin-left:" + props.marginLeft + "px;"}
  ${(props) => props.marginRight && "margin-right:" + props.marginRight + "px;"}
  ${(props) => props.padding && "padding:" + props.padding + "px;"}
  ${(props) => props.paddingTop && "padding-top:" + props.paddingTop + "px;"}
  ${(props) =>
    props.paddingBottom && "padding-bottom:" + props.paddingBottom + "px;"}
  ${(props) =>
    props.paddingRight && "padding-right:" + props.paddingRight + "px;"}
  ${(props) => props.paddingLeft && "padding-left:" + props.paddingLeft + "px;"}
  ${(props) =>
    props.borderRadius && "border-radius:" + props.borderRadius + "px;"}
`;
