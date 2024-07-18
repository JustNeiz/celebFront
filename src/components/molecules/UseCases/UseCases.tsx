import { Flex } from "@mantine/core";
import InfoCard from "../InfoCard/InfoCard";

const UseCases = () => {
  return (
    <Flex wrap="wrap" justify="space-between" align="center">
      <InfoCard/>
      <InfoCard/>
      <InfoCard/>
      <InfoCard/>
      <InfoCard/>
      <InfoCard/>
    </Flex>
  );
};

export default UseCases;