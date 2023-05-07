import { NavBar } from "../";
import PropTypes from "prop-types";
const PublicRoute = ({ component: Component }) => {
  return (
    <>
      <NavBar />
      <Component />
      <div>footer</div>
    </>
  );
};

export { PublicRoute };

PublicRoute.propTypes = {
  component: PropTypes.element,
};
