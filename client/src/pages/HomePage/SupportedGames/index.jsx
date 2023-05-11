import { GameCard } from "../../../components";
import { Container, Flex, Heading } from "../../../layouts";
const SupportedGames = () => {
  return (
    <Container padding={20} borderRadius={20} backgroundColor="fff">
      <Heading
        color="000000"
        fontSize={1.5}
        marginBottom={0}
        marginLeft={0}
        marginRight={0}
        marginTop={0}
      >
        Supported Games
      </Heading>
      <Flex alignItems="center" justifyContent="space-around" flexWrap>
        <GameCard bgImage="csgo" bottomLogo="csgo" bottomHeading="CS:GO" />
        <GameCard
          bgImage="valorant"
          bottomLogo="valorant"
          bottomHeading="Valorant"
        />
        <GameCard
          bgImage="fortnite"
          bottomLogo="fortnite"
          bottomHeading="Fortnite"
        />
        <GameCard
          bgImage="apexLegends"
          bottomLogo="apexLegends"
          bottomHeading="Apex Legends"
        />
        <GameCard
          bgImage="overwatch"
          bottomLogo="overwatch"
          bottomHeading="Overwatch 2"
        />
        <GameCard bgImage="pubg" bottomLogo="pubg" bottomHeading="Pubg" />
      </Flex>
    </Container>
  );
};

export default SupportedGames;
