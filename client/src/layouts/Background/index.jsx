import { StyledBackground } from "./style";
import PropTypes from "prop-types";

const Background = ({
  backgroundImage,
  backgroundSize,
  backgroundRepeat,
  borderRadius,
  children,
}) => {
  return (
    <StyledBackground
      backgroundImage={backgroundImage}
      backgroundRepeat={backgroundRepeat}
      backgroundSize={backgroundSize}
      borderRadius={borderRadius}
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
  children: PropTypes.node,
};
