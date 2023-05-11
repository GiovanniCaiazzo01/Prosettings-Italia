import { NavBar } from "../";
import { Flex } from "../../layouts";
import PropTypes from "prop-types";
const PublicRoute = ({ component: Component }) => {
  return (
    <>
      <NavBar />
      <Flex>
        <div style={{ width: "25%" }}>left</div>
        <Flex column justifyContent={"center"}>
          <Component />
        </Flex>
        <div style={{ width: "25%" }}>right</div>
      </Flex>
      <div>footer</div>
    </>
  );
};

export { PublicRoute };

PublicRoute.propTypes = {
  component: PropTypes.element,
};
