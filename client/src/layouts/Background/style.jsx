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
  width: ${(props) => props.width}px;
  max-width: ${(props) => props.maxWidth}px;
  height: ${(props) => props.height}px;
  max-height: ${(props) => props.maxHeight}px;
  border-radius: ${(props) => props.borderRadius}px;
  background: linear-gradient(
      180deg,
      rgba(17, 17, 17, 0) -7.44%,
      rgba(17, 17, 17, 0.8) 105.95%
    ),
    url(${(props) => images[props.backgroundImage]});
  background-size: ${(props) => props.backgroundSize};
  background-repeat: ${(props) => props.backgroundRepeat};
  transition: transform 1s;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  &:hover {
    transform: scale(1.1);
  }
`;
