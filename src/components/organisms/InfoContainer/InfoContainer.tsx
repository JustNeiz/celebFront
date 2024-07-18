import { Flex } from "@mantine/core";
import InfoCard from "../../molecules/InfoCard/InfoCard";
import AboutUs from "../../molecules/AboutUs/AboutUs";

const InfoContainer = () => {
  return (
    <Flex justify="center" w="80vw" mt={40} direction="column" align="center">
      <AboutUs />
      <Flex mt={20}>
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </Flex>
    </Flex>
  );
};

export default InfoContainer;
