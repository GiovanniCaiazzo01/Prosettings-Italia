import { NavBar } from "../";
import { Flex } from "../../layouts";
import PropTypes from "prop-types";
const PublicRoute = ({ component: Component }) => {
  return (
    <>
      <NavBar />
      <Flex justifyContent={"center"} column>
        <Component />
      </Flex>
      <div>footer</div>
    </>
  );
};

export { PublicRoute };

PublicRoute.propTypes = {
  component: PropTypes.element,
};
