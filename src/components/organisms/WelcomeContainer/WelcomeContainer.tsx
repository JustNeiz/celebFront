import { Flex } from "@mantine/core";
import MainExampleVideo from "../../atoms/MainExapmleVideo/MainExampleVideo";
import WelcomeTextContainer from "../../molecules/WelcomeTextContainer/WelcomeTextContainer";

const WelcomeContainer = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
      mt={10}
      direction="column"
      w="80vw"
      id="home"
    >
      <MainExampleVideo />
      <WelcomeTextContainer/>
    </Flex>
  );
};

export default WelcomeContainer;
