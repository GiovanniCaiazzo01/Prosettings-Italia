import { StyledLogo } from "./style";
import PropTypes from "prop-types";

const Logo = ({ src, alt, width, height }) => {
  return <StyledLogo src={src} alt={alt} width={width} height={height} />;
};

export { Logo };

Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
