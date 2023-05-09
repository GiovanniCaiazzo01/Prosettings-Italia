import { StyledContainer } from "./style";
import PropTypes from "prop-types";
const Container = ({
  width,
  maxWidth,
  height,
  maxHeight,
  padding,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  margin,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  backgroundColor,
  borderRadius,
  children,
}) => {
  return (
    <StyledContainer
      width={width}
      maxWidth={maxWidth}
      height={height}
      maxHeight={maxHeight}
      padding={padding}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
    >
      {children}
    </StyledContainer>
  );
};

export { Container };

Container.propTypes = {
  width: PropTypes.number,
  maxWidth: PropTypes.number,
  height: PropTypes.number,
  maxHeight: PropTypes.number,
  padding: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingLeft: PropTypes.number,
  margin: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginRight: PropTypes.number,
  marginLeft: PropTypes.number,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.number,
  children: PropTypes.node,
};
