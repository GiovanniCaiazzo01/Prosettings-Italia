import styled from "styled-components";
import csgoImage from "../../assets/cs_go-2.webp";

const images = {
  csgo: csgoImage,
};
export const StyledBackground = styled.div`
  background-image: url("${(props) => images[props.backgroundImage]}");
  background-size: ${(props) => props.backgroundSize};
  background-repeat: ${(props) => props.backgroundRepeat};
`;
