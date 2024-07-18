import { Flex } from "@mantine/core";
import HomeButton from "../../atoms/HomeButton/HomeButton";
import ExamplesButton from "../../atoms/ExamplesButton/ExamplesButton";
import PricingButton from "../../atoms/PricingButton/PricingButton";
import StartNowButton from "../../atoms/StartNowButton/StartNowButton";

const HeaderButtonsContainer = () => {

  return (
    <Flex justify="space-between" align="center" miw={600} mr={10} c="black" bg="#ffece4">
        <HomeButton />
        <ExamplesButton/>
        <PricingButton/>
        <StartNowButton buttonSize=""/>
    </Flex>
  );
};

export default HeaderButtonsContainer;