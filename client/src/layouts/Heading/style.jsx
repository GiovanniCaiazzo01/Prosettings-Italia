import styled from "styled-components";

export const StyledHeading = styled.h1`
  width: fit-content;
  ${(props) => props.color && "color:#" + props.color + ";"}
  ${(props) => props.fontSize && "font-size:" + props.fontSize + "rem;"}
  ${(props) => props.fontWeight && "font-weight:" + props.fontWeight + ";"}
  ${(props) =>
    props.marginTop
      ? "margin-top:" + props.marginTop + "rem;"
      : "margin-top: 0px;"}
  ${(props) =>
    props.marginBottom
      ? "margin-bottom:" + props.marginBottom + "rem;"
      : "margin-bottom: 0px;"}
  ${(props) =>
    props.marginRight
      ? "margin-right:" + props.marginRight + "rem;"
      : "margin-right: 0px;"}
  ${(props) =>
    props.marginLeft
      ? "margin-left:" + props.marginLeft + "rem;"
      : "margin-left: 0px;"}
`;
