import { StyledFlex } from "./style";
import PropTypes from "prop-types";

const Flex = ({
  column,
  justifyContent,
  alignItems,
  width,
  maxWidth,
  children,
}) => {
  console.log(column);
  return (
    <StyledFlex
      column={column}
      justifyContent={justifyContent}
      alignItems={alignItems}
      width={width}
      maxWidth={maxWidth}
    >
      {children}
    </StyledFlex>
  );
};

export { Flex };

Flex.propTypes = {
  column: PropTypes.bool,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  width: PropTypes.number,
  maxWidth: PropTypes.number,
  children: PropTypes.node,
};
