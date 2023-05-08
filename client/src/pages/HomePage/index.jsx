import { Card, Logo } from "../../components";
import { Container } from "../../layouts";

const HomePage = () => {
  return (
    <>
      <Logo />
      {/*
       * TODO: vanno create delle sub-directory all'interno della dir HomePage per tutte le section della pagina
       */}
      <Container borderRadius={20} backgroundColor="fff" flex padding={20}>
        <Card bgImage="csgo" bottomLogo="csgo" />
        <Card bgImage="valorant" bottomLogo="valorant" />
        <Card bgImage="overwatch" bottomLogo="overwatch" />
      </Container>
    </>
  );
};

export { HomePage };
