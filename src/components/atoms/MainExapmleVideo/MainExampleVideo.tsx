import { Flex } from "@mantine/core";

const MainExampleVideo = () => {
  return (
    <Flex w="80vw" h="50vh" mt={80}>
      <video src="https://pub-4f08ac9114414c629334b59019ad746b.r2.dev/elon-short.mp4#t=0.001" autoPlay loop width="100%">

      </video>
    </Flex>
  );
};

export default MainExampleVideo;
