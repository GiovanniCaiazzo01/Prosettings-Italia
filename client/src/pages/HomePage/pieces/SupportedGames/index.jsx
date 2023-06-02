import { GameCard } from "../../../../components";
import { Container, Flex } from "../../../../layouts";
const SupportedGames = () => {
  return (
    <>
      <Container
        padding={20}
        borderRadius={20}
        // backgroundColor="fff"
        maWidth={500}
      >
        <Flex alignItems="center" justifyContent="center" flexWrap>
          <GameCard
            gameId="csgo"
            bgImage="csgo"
            bottomLogo="csgo"
            bottomHeading="CS:GO"
          />
          <GameCard
            gameId="valorant"
            bgImage="valorant"
            bottomLogo="valorant"
            bottomHeading="Valorant"
          />
          <GameCard
            gameId="fortnite"
            bgImage="fortnite"
            bottomLogo="fortnite"
            bottomHeading="Fortnite"
          />
          <GameCard
            gameId="apexLegends"
            bgImage="apexLegends"
            bottomLogo="apexLegends"
            bottomHeading="Apex Legends"
          />
          <GameCard
            gameId="overwatch2"
            bgImage="overwatch"
            bottomLogo="overwatch"
            bottomHeading="Overwatch 2"
          />
          <GameCard
            gameId="pubg"
            bgImage="pubg"
            bottomLogo="pubg"
            bottomHeading="Pubg"
          />
        </Flex>
      </Container>
    </>
  );
};

export default SupportedGames;
