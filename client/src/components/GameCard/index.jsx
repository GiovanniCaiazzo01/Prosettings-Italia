import { Background, Flex, Heading, Img } from "../../layouts";
import PropTypes from "prop-types";

const GameCard = ({ bgImage, bottomLogo, bottomHeading }) => {
  return (
    <>
      <Flex column alignItems="center" width={0}>
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
            <Img src={bottomLogo} width={80} marginBottom={20} />
          </Flex>
        </Background>
        <Heading color="000000" fontSize={1}>
          {bottomHeading}
        </Heading>
      </Flex>
    </>
  );
};

export { GameCard };

GameCard.propTypes = {
  bgImage: PropTypes.string,
  bottomLogo: PropTypes.string,
  bottomHeading: PropTypes.string,
};
