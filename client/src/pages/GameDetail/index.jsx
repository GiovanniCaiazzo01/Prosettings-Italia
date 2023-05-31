import React from "react";
// import PropTypes from "prop-types";
import { Container, Flex, Img } from "../../layouts";
import { useParams } from "react-router-dom";

const GameDetail = () => {
  const { game } = useParams();
  return (
    <Container padding={20}>
      <Flex alignItems="center">
        <Img src={game} />
      </Flex>
    </Container>
  );
};

export { GameDetail };

// GameDetail.propTypes = {
//   game: PropTypes.string,
// };
