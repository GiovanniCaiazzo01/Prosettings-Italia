import styled from "styled-components";
import csgoImage from "../../assets/games/cs_go-2.webp";
import valorantImage from "../../assets/games/valorant-3.webp";
import apexLegendsImage from "../../assets/games/apex-legends-3.webp";
import fortniteImageImage from "../../assets/games/fortnite-3.webp";
import overwatchImage from "../../assets/games/overwatch-2.webp";
import pubgImage from "../../assets/games/pubg-2.webp";

const images = {
  csgo: csgoImage,
  valorant: valorantImage,
  apexLegends: apexLegendsImage,
  fortnite: fortniteImageImage,
  overwatch: overwatchImage,
  pubg: pubgImage,
};
export const StyledBackground = styled.div`
  ${(props) => props.width && "width:" + props.width + "px;"}
  ${(props) => props.maxWidth && "max-width:" + props.maxWidth + "px;"}
  ${(props) => props.height && "height:" + props.height + "px;"}  
  ${(props) => props.maxHeight && "max-height:" + props.height + "px;"}
  ${(props) =>
    props.borderRadius && "border-radius:" + props.borderRadius + "px;"}
  background-image: url("${(props) => images[props.backgroundImage]}");
  background-size: ${(props) => props.backgroundSize};
  background-repeat: ${(props) => props.backgroundRepeat};
`;
