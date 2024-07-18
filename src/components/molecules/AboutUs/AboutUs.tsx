import { Flex, Text } from "@mantine/core";
const AboutUs = () => {
  return (
    <Flex align="flex-start" w="100%">
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
        {" "}
        About us
      </Text>
    </Flex>
  );
};

export default AboutUs;
