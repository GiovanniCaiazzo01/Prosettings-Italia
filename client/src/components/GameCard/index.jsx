import { Background, Flex, Heading, Img } from "../../layouts";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const GameCard = ({ bgImage, bottomLogo, bottomHeading, gameId }) => {
  return (
    <>
      <Link to={`game/${gameId}`}>
        <Flex column alignItems="center" marginRight={25}>
          <Background
            backgroundImage={bgImage}
            maxWidth={130}
            width={130}
            height={150}
            maxHeight={150}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            borderRadius={15}
          >
            <Flex column justifyContent="flex-end" alignItems="center">
              <Img isLogo src={bottomLogo} width={110} marginBottom={20} />
            </Flex>
          </Background>
          {bottomHeading && (
            <Heading
              color="6e6e6e"
              fontSize={1}
              marginTop={0.8}
              marginBottom={0.8}
            >
              {bottomHeading}
            </Heading>
          )}
        </Flex>
      </Link>
    </>
  );
};

export { GameCard };

GameCard.propTypes = {
  bgImage: PropTypes.string,
  bottomLogo: PropTypes.string,
  bottomHeading: PropTypes.string,
  gameId: PropTypes.string,
};
