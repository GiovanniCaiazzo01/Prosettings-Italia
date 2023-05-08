import { Container, LinkElement, Flex } from "../../layouts/";
import { Logo } from "../Logo";
const NavBar = () => {
  return (
    <Container
      flex
      justifyContent="space-between"
      alignItems="center"
      paddingLeft={20}
      paddingRight={20}
    >
      <Logo width={250} />
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        maxWidth={800}
      >
        <LinkElement label="PLAYERS" />
        <LinkElement label="GAMES" />
        <LinkElement label="GUIDES" />
        <LinkElement label="PROLISTS" />
        <LinkElement label="BRANDS" />
        <LinkElement label="REVIEWS" />
        <LinkElement label="BLOG" />
      </Flex>
    </Container>
  );
};

export { NavBar };
