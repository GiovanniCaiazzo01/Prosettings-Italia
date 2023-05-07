import { StyledBackground } from "./style";
import PropTypes from "prop-types";

const Background = ({
  backgroundImage,
  backgroundSize,
  backgroundRepeat,
  children,
}) => {
  return (
    <StyledBackground
      backgroundImage={backgroundImage}
      backgroundRepeat={backgroundRepeat}
      backgroundSize={backgroundSize}
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
  children: PropTypes.node,
};
