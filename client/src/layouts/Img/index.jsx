import { StyledImg } from "./style";
import csgoLogo from "../../assets/gamesLogo/cs_go.svg";
import valorantLogo from "../../assets/gamesLogo/valorant.svg";
import apexLogo from "../../assets/gamesLogo/apex.svg";
import fortniteLogo from "../../assets/gamesLogo/fortnite.svg";
import overwatch2Logo from "../../assets/gamesLogo/overwatch-2-white.svg";
import pubgLogo from "../../assets/gamesLogo/pubg.svg";
import prosettingsItalia from "../../assets/General/logo.webp";

import PropTypes from "prop-types";

const IMAGES = {
  csgo: csgoLogo,
  valorant: valorantLogo,
  apexLegend: apexLogo,
  fortnite: fortniteLogo,
  overwatch: overwatch2Logo,
  pubg: pubgLogo,
  prosettingsitalia: prosettingsItalia,
};

const Img = ({ src, alt, width, height }) => {
  return (
    <StyledImg
      src={IMAGES[src]}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
    />
  );
};

export { Img };

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
