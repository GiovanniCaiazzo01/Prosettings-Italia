import styled from "styled-components";

export const StyledLogo = styled.img`
  width: ${(props) => props.width && props.width}px;
  height: ${(props) => props.height && props.height}px;
`;
