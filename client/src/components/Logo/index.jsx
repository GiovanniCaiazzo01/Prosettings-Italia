import { Img } from "../../layouts";
import PropTypes from "prop-types";

const Logo = ({ width }) => {
  const src =
    "https://prosettings.net/acd-cgi/img/v1/wp-content/uploads/prosettings-logo.png?dpr=1|f=auto|fit=cover|height=72|q=85|width=400";
  const ALT = "Prosettings Italia logo";

  return <Img src={src} alt={ALT} width={width} />;
};

export { Logo };

Logo.propTypes = {
  width: PropTypes.number,
};
