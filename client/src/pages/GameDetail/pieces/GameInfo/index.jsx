import { Container, Flex, Heading } from "../../../../layouts";
import { GameCard } from "../../../../components/";
import { useParams } from "react-router-dom";
import { GAME_INFO } from "./utils";

const GameInfo = () => {
  const { game } = useParams();

  return (
    <Container
      padding={15}
      backgroundColor="fff"
      marginTop={20}
      borderRadius={15}
    >
      <Flex justifyContent="space-around" marginRight={100}>
        <GameCard bgImage={game} bottomLogo={game} gameId={game} key={game} />
        <Flex column alignItems="flex-start " maxWidth={300} height={125}>
          <Heading color="000000">{GAME_INFO[game].game_name}</Heading>
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
            </Flex>
          </Flex>
          <Heading fontSize={0.6} color="7A7B8C">
            {GAME_INFO[game].description}
          </Heading>
        </Flex>
      </Flex>
    </Container>
  );
};

export { GameInfo };
