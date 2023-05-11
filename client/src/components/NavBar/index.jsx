import { Container, LinkElement, Flex } from "../../layouts/";
import { Logo } from "../Logo";
const NavBar = () => {
  return (
    <Container paddingLeft={20} paddingRight={20} backgroundColor="fff">
      <Flex justifyContent="space-between">
        <Logo width={250} />
        <Flex
          alignItems={"center"}
          justifyContent={"space-around"}
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
      </Flex>
    </Container>
  );
};

export { NavBar };
