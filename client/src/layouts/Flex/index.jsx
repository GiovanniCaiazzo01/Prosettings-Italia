import { StyledFlex } from "./style";
import PropTypes from "prop-types";

const Flex = ({
  column,
  justifyContent,
  alignItems,
  width,
  maxWidth,
  height,
  maxHeight,
  flexWrap,
  padding,
  children,
}) => {
  return (
    <StyledFlex
      column={column}
      flexWrap={flexWrap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      width={width}
      maxWidth={maxWidth}
      height={height}
      maxHeight={maxHeight}
      padding={padding}
    >
      {children}
    </StyledFlex>
  );
};

export { Flex };

Flex.propTypes = {
  column: PropTypes.bool,
  flexWrap: PropTypes.bool,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  width: PropTypes.number,
  maxWidth: PropTypes.number,
  height: PropTypes.number,
  maxHeight: PropTypes.number,
  padding: PropTypes.number,
  children: PropTypes.node,
};
