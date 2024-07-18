import { Flex } from "@mantine/core";
import AboutUs from "../AboutUs/AboutUs";
import AboutUsDescription from "../../atoms/AboutUsDesription/AboutUsDescription";
import StartNowButton from "../../atoms/StartNowButton/StartNowButton";

const WelcomeTextContainer = () => {
  return (
    <Flex direction="column" h="80wh" align="flex-start" mt={40}>
      <AboutUs />
      <AboutUsDescription />
      <StartNowButton buttonSize="xl" />
    </Flex>
  );
};

export default WelcomeTextContainer;
