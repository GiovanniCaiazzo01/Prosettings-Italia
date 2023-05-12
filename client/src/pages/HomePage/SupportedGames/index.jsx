import { GameCard } from "../../../components";
import { Container, Flex } from "../../../layouts";
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
            bgImage="csgo"
            bottomLogo="csgo"
            bottomHeading="CS:GO"
            linkTo="/games/csgo"
          />
          <GameCard
            bgImage="valorant"
            bottomLogo="valorant"
            bottomHeading="Valorant"
            linkTo="/games/valorant"
          />
          <GameCard
            bgImage="fortnite"
            bottomLogo="fortnite"
            bottomHeading="Fortnite"
            linkTo="/games/fortnite"
          />
          <GameCard
            bgImage="apexLegends"
            bottomLogo="apexLegends"
            bottomHeading="Apex Legends"
            linkTo="/games/apex-legends"
          />
          <GameCard
            bgImage="overwatch"
            bottomLogo="overwatch"
            bottomHeading="Overwatch 2"
            linkTo="/games/overwatch-2"
          />
          <GameCard
            bgImage="pubg"
            bottomLogo="pubg"
            bottomHeading="Pubg"
            linkTo="/games/pubg"
          />
        </Flex>
      </Container>
    </>
  );
};

export default SupportedGames;
