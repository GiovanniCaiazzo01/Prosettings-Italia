import PropTypes from "prop-types";
import { StyledContainer } from "./style";

const Container = ({ flex = false, column = false, children }) => {
  console.log(column);
  return (
    <StyledContainer flex={flex} column={column}>
      {children}
    </StyledContainer>
  );
};

export { Container };

Container.propTypes = {
  column: PropTypes.bool,
  flex: PropTypes.bool,
  children: PropTypes.node,
};
