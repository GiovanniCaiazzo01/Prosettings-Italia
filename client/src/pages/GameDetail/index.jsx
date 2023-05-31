import React from "react";
// import PropTypes from "prop-types";
import { Container, Flex, Heading, Img } from "../../layouts";
import { useParams } from "react-router-dom";

const GameDetail = () => {
  const { game } = useParams();
  return (
    <Container padding={20}>
      <Flex>
        <Img src={game} width={150} />
        <Flex marginLeft={10} column justifyContent="space-around">
          <Heading color="000000">{game.toUpperCase()}</Heading>
          <Flex alignItems="center" justifyContent="space-between">
            <Heading color="000000" fontSize={1}>
              222 players
            </Heading>
            <Heading color="000000" fontSize={1}>
              222 players
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export { GameDetail };

// GameDetail.propTypes = {
//   game: PropTypes.string,
// };
