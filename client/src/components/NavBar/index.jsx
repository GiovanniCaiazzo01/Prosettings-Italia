import { Container, LinkElement } from "../../layouts/";

const NavBar = () => {
  return (
    <Container flex justifyContent="center" alignItems="center">
      <img src="https://prosettings.net/acd-cgi/img/v1/wp-content/uploads/prosettings-logo.png?dpr=1|f=auto|fit=cover|height=72|q=85|width=400" />
      <LinkElement>PLAYERS</LinkElement>
      <LinkElement>GAMES</LinkElement>
      <LinkElement>GUIDES</LinkElement>
      <LinkElement>PRO LISTS</LinkElement>
      <LinkElement>BRANDS</LinkElement>
      <LinkElement>REVIEWS</LinkElement>
      <LinkElement>BLOG</LinkElement>
    </Container>
  );
};

export { NavBar };
