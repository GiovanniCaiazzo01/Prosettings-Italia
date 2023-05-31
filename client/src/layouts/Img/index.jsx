import { StyledImg } from "./style";
import csgoLogo from "../../assets/gamesLogo/cs_go.svg";
import valorantLogo from "../../assets/gamesLogo/valorant.svg";
import apexLogo from "../../assets/gamesLogo/apex.svg";
import fortniteLogo from "../../assets/gamesLogo/fortnite.svg";
import overwatch2Logo from "../../assets/gamesLogo/overwatch-2-white.svg";
import pubgLogo from "../../assets/gamesLogo/pubg.svg";
import prosettingsItalia from "../../assets/General/logo.webp";
import csgoImage from "../../assets/games/cs_go-2.webp";
import valorantImage from "../../assets/games/valorant-3.webp";
import apexLegendsImage from "../../assets/games/apex-legends-3.webp";
import fortniteImage from "../../assets/games/fortnite-3.webp";
import overwatchImage from "../../assets/games/overwatch-2.webp";
import pubgImage from "../../assets/games/pubg-2.webp";

import PropTypes from "prop-types";

const LOGO_IMAGES = {
  csgo: csgoLogo,
  valorant: valorantLogo,
  apexLegends: apexLogo,
  fortnite: fortniteLogo,
  overwatch: overwatch2Logo,
  pubg: pubgLogo,
  prosettingsitalia: prosettingsItalia,
};

const GAME_IMAGES = {
  csgo: csgoImage,
  valorant: valorantImage,
  apexLegends: apexLegendsImage,
  fortnite: fortniteImage,
  overwatch: overwatchImage,
  pubg: pubgImage,
  prosettingsitalia: prosettingsItalia,
};

const Img = ({
  src,
  alt,
  width,
  height,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  padding,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  isLogo,
}) => {
  return (
    <StyledImg
      src={isLogo ? LOGO_IMAGES[src] : GAME_IMAGES[src]}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      padding={padding}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingRight={paddingRight}
      paddingLeft={paddingLeft}
    />
  );
};

export { Img };

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  padding: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingLeft: PropTypes.number,
  isLogo: PropTypes.bool,
};
