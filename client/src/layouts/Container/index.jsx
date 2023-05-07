import { StyledContainer } from "./style";
import PropTypes from "prop-types";
const Container = ({
  flex = false,
  column = false,
  justifyContent,
  alignItems,
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
      flex={flex}
      column={column}
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
      justifyContent={justifyContent}
      alignItems={alignItems}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
    >
      {children}
    </StyledContainer>
  );
};

export { Container };

Container.propTypes = {
  column: PropTypes.bool,
  flex: PropTypes.bool,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
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
