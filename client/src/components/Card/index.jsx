import { Background, Container, Flex } from "../../layouts";

const Card = () => {
  return (
    <Background
      backgroundImage="csgo"
      borderRadius={15}
      backgroundSize={"contain"}
      backgroundRepeat={"no-repeat"}
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
          <div>asdòlkdsalda</div>
          <div>asdòlkdsalda</div>
        </Flex>
      </Container>
    </Background>
  );
};

export { Card };
