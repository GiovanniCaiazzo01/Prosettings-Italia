import { StyledImg } from "./style";
import PropTypes from "prop-types";

const Img = ({ src, alt, width, height }) => {
  return <StyledImg src={src} alt={alt} width={width} height={height} />;
};

export { Img };

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
