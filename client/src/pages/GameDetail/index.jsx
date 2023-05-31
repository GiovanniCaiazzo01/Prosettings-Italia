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
      maxWidth={600}
    >
      <Flex justifyContent="center">
        <Img src={game} width={150} />
        <Flex
          marginLeft={30}
          column
          justifyContent="space-around"
          alignItems="space-around"
        >
          <Heading color="000000">{game.toUpperCase()}</Heading>
          <Flex alignItems="center">
            <Flex alignItems="flex-start" justifyContent="space-around">
              <div style={{ color: "#000000" }}>ciao</div>
              <div style={{ color: "#000000" }}>ciao</div>
            </Flex>
            <Flex alignItems="center" justifyContent="space-around">
              <div style={{ color: "#000000" }}>ciao</div>
              <div style={{ color: "#000000" }}>ciao</div>
            </Flex>
          </Flex>
          <Heading fontSize={0.6} color="000000">
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
