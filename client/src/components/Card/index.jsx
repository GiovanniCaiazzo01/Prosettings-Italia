import { Background, Container, Flex, Img } from "../../layouts";
import PropTypes from "prop-types";

const Card = ({ bgImage, bottomLogo }) => {
  return (
    <Background
      backgroundImage={bgImage}
      borderRadius={15}
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
    >
      <Container
        paddingTop={50}
        paddingBottom={50}
        paddingLeft={20}
        paddingRight={20}
      >
        <Flex
          column
          height={150}
          maxWidth={150}
          width={150}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Img src={bottomLogo} />
        </Flex>
      </Container>
    </Background>
  );
};

export { Card };

Card.propTypes = {
  bgImage: PropTypes.string,
  bottomLogo: PropTypes.string,
};
