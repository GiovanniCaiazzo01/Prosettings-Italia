import styled from "styled-components";

export const StyledContainer = styled.div`
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

    background-color: #${(props) => props.backgroundColor};
  ${(props) =>
    props.borderRadius && "border-radius:" + props.borderRadius + "px;"}

  color: #fff;
`;
