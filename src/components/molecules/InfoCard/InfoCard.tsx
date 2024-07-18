import { Card, Flex, Image, Text } from "@mantine/core";
import InfoCardText from "../../atoms/InfoCardText/InfoCardText";

const InfoCard = () => {
  return (
    <Card>
      <Flex
        align="center"
        direction="column"
        ta="center"
        bd="5px solid #ffddd0"
        maw={300}
        p={20}
        style={{
          borderRadius: '10px',
        }}
      >
        <Image
          src="https://cdn-icons-png.flaticon.com/512/105/105220.png"
          w={100}
          h={100}
        />
        <InfoCardText />
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
          cumque.
        </Text>
      </Flex>
    </Card>
  );
};

export default InfoCard;
