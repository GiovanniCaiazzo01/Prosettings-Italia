import { StyledBackground } from "./style";
import PropTypes from "prop-types";

const Background = ({
  backgroundImage,
  backgroundSize,
  backgroundRepeat,
  borderRadius,
  width,
  height,
  maxWidth,
  maxHeight,
  children,
}) => {
  return (
    <StyledBackground
      backgroundImage={backgroundImage}
      backgroundRepeat={backgroundRepeat}
      backgroundSize={backgroundSize}
      borderRadius={borderRadius}
      width={width}
      height={height}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
    >
      {children}
    </StyledBackground>
  );
};

export { Background };

Background.propTypes = {
  backgroundImage: PropTypes.string,
  backgroundSize: PropTypes.string,
  backgroundRepeat: PropTypes.string,
  borderRadius: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
  children: PropTypes.node,
};
