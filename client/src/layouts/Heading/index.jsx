import { StyledHeading } from "./style";
import PropTypes from "prop-types";

const Heading = ({
  fontSize,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  fontWeight,
  color,
  children,
}) => {
  return (
    <StyledHeading
      fontSize={fontSize}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      fontWeight={fontWeight}
    >
      {children}
    </StyledHeading>
  );
};

export { Heading };

Heading.propTypes = {
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  colot: PropTypes.string,
  children: PropTypes.node,
};
