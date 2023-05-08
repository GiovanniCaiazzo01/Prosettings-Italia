import styled from "styled-components";

export const StyledImg = styled.img`
  width: ${(props) => props.width && props.width}px;
  height: ${(props) => props.height && props.height}px;
`;
