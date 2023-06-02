import React from "react";
// import PropTypes from "prop-types";
import { Container, Flex, Heading, Img } from "../../layouts";
import { useParams } from "react-router-dom";

const GameDetail = () => {
  const { game } = useParams();
  return (
    <Container
      padding={20}
      backgroundColor="fff"
      marginTop={20}
      borderRadius={15}
    >
      <Flex justifyContent="space-around" marginRight={100}>
        <Img src={game} width={150} borderRadius={20} />
        <Flex column alignItems="flex-start " maxWidth={300}>
          <Heading color="000000">{game.toUpperCase()}</Heading>
          <Flex maxWidth={200} justifyContent="space-around">
            <Flex alignItems="center">
              <div style={{ color: "#000000" }}>X</div>
              <Heading fontSize={0.8} color="000000">
                300
              </Heading>
            </Flex>
            <Flex alignItems="center">
              <div style={{ color: "#000000" }}>X</div>
              <Heading fontSize={0.8} color="000000">
                300
              </Heading>
            </Flex>{" "}
          </Flex>
          <Heading fontSize={0.6} color="7A7B8C">
            VALORANT is a free-to-play first-person hero shooter developed and
            published by Riot Games. It’s 5v5, competitive, and character-based.
          </Heading>
        </Flex>
      </Flex>
    </Container>
  );
};

export { GameDetail };

// GameDetail.propTypes = {
//   game: PropTypes.string,
// };
