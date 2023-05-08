import { Img } from "../../layouts";
import PropTypes from "prop-types";

const Logo = ({ width }) => {
  const ALT = "Prosettings Italia logo";
  const LOGO = "prosettingsitalia";

  return <Img src={LOGO} alt={ALT} width={width} />;
};

export { Logo };

Logo.propTypes = {
  width: PropTypes.number,
};
