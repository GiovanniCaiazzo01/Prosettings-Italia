import { Container, LinkElement, Flex, Logo } from "../../layouts/";
const NavBar = () => {
  const logo =
    "https://prosettings.net/acd-cgi/img/v1/wp-content/uploads/prosettings-logo.png?dpr=1|f=auto|fit=cover|height=72|q=85|width=400";
  return (
    <Container flex justifyContent="space-between" alignItems="center">
      <Logo src={logo} alt="Logo Prosettings Italia" width={250} />
      <Flex
        alignItems={"center"}
        justifyContent={"space-around"}
        maxWidth={800}
      >
        <LinkElement label={"PLAYERS"} />
        <LinkElement label={"GAMES"} />
        <LinkElement label={"GUIDES"} />
        <LinkElement label={"PROLISTS"} />
        <LinkElement label={"BRANDS"} />
        <LinkElement label={"REVIEWS"} />
        <LinkElement label={"BLOG"} />
      </Flex>
    </Container>
  );
};

export { NavBar };
