import { StyledHeading } from "./style";
import PropTypes from "prop-types";

const Heading = ({
  fontSize,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  fontWeight,
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
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  fontWeight: PropTypes.string,
  children: PropTypes.node,
};
