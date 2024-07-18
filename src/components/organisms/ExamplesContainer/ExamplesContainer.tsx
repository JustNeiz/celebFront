import { Flex, Text } from "@mantine/core";
import ScrollAreaExamples from "../../molecules/ScrollAreaExamples/ScrollAreaExamples";

const ExamplesContainer = () => {
  return (
    <Flex direction="column" align="flex-start" w="80vw" mt="40" id="examples">
      <Text
        fw={800}
        fz={48}
        ta="left"
        bg="#d8ecfb"
        style={{
          borderRadius: "10px",
        }}
        p={5}
      >
        Examples
      </Text>
      <Text fz={24} lh={1.2} mb={20}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
        laboriosam fuga. Nemo perferendis vitae dolore dolorem. Maxime quidem
        nam assumenda ea. Doloribus pariatur iusto reiciendis inventore, maxime
        excepturi dolores qui.
      </Text>
      <ScrollAreaExamples />
    </Flex>
  );
};

export default ExamplesContainer;
