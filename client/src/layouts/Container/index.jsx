import PropTypes from "prop-types";
import { StyledContainer } from "./style";

const Container = ({
  flex = false,
  column = false,
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
  children,
}) => {
  console.log(column);
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
    >
      {children}
    </StyledContainer>
  );
};

export { Container };

Container.propTypes = {
  column: PropTypes.bool,
  noPadding: PropTypes.bool,
  noMargin: PropTypes.bool,
  flex: PropTypes.bool,
  children: PropTypes.node,
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
};
