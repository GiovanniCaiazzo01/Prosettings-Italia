import { StyledLinkElement } from "./style";
import PropTypes from "prop-types";

const LinkElement = ({ children }) => {
  return <StyledLinkElement>{children}</StyledLinkElement>;
};

export { LinkElement };

LinkElement.propTypes = {
  children: PropTypes.node,
};
