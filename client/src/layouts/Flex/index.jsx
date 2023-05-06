import { StyledFlex } from "./style";
import PropTypes from "prop-types";

const Flex = ({ column = false, children }) => {
  return <StyledFlex column={column}>{children}</StyledFlex>;
};

export { Flex };

Flex.propTypes = {
  column: PropTypes.bool,
  children: PropTypes.node,
};
