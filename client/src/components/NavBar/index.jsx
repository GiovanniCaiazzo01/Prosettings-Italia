import { Container, LinkElement, Flex } from "../../layouts/";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Container flex justifyContent="space-between" alignItems="center">
      <img src="https://prosettings.net/acd-cgi/img/v1/wp-content/uploads/prosettings-logo.png?dpr=1|f=auto|fit=cover|height=72|q=85|width=400" />
      <Flex
        alignItems={"center"}
        justifyContent={"space-around"}
        maxWidth={800}
      >
        <LinkElement>
          <Link> PLAYERS</Link>
        </LinkElement>
        <LinkElement>
          <Link> GAMES</Link>
        </LinkElement>
        <LinkElement>
          <Link> GUIDES</Link>
        </LinkElement>
        <LinkElement>
          <Link> PROLISTS</Link>
        </LinkElement>
        <LinkElement>
          <Link> BRANDS</Link>
        </LinkElement>
        <LinkElement>
          <Link> REVIEWS</Link>
        </LinkElement>
        <LinkElement>
          <Link> BLOG</Link>
        </LinkElement>
      </Flex>
    </Container>
  );
};

export { NavBar };
