import styled from "styled-components";

export const StyledHeading = styled.h1`
  width: fit-content;
  ${(props) => props.color && "color:#" + props.color + ";"}
  ${(props) => props.fontSize && "font-size:" + props.fontSize + "rem;"}
  ${(props) => props.fontWeight && "font-weight:" + props.fontWeight + ";"}
  ${(props) =>
    props.marginTop ||
    (props.marginBottom === 0 && "margin-top:" + props.marginTop + "rem;")}
  ${(props) =>
    props.marginBottom ||
    (props.marginBottom === 0 &&
      "margin-bottom:" + props.marginBottom + "rem;")}
  ${(props) =>
    props.marginRight ||
    (props.marginRight === 0 && "margin-right:" + props.marginRight + "rem;")}
  ${(props) =>
    props.marginLeft ||
    (props.marginLeft === 0 && "margin-left:" + props.marginLeft + "rem;")}
`;
