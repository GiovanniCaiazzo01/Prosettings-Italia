import { Container, LinkElement, Flex } from "../../layouts/";
import { Logo } from "../Logo";
const NavBar = () => {
  return (
    <Container padding={10} backgroundColor="fff">
      <Flex justifyContent="space-between" alignItems="center">
        <Logo width={150} />
        <Flex alignItems="center" justifyContent="space-around" maxWidth={800}>
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
