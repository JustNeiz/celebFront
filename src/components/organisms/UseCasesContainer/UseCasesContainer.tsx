import { Flex } from "@mantine/core"
import AboutUs from "../../molecules/AboutUs/AboutUs";
import UseCases from "../../molecules/UseCases/UseCases";

const UseCasesContainer = () => {
  return (
    <Flex mt={40} direction="column" justify="flex-start" w="80vw" wrap="wrap" id="pupa">
      <AboutUs/>
      <UseCases/>

    </Flex>
  )
};

export default UseCasesContainer;