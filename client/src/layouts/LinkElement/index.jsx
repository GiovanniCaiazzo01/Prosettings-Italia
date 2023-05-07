import { StyledLinkElement } from "./style";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const LinkElement = ({ to, label }) => {
  return (
    <StyledLinkElement>
      <Link to={to}>{label}</Link>
    </StyledLinkElement>
  );
};

export { LinkElement };

LinkElement.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
};
