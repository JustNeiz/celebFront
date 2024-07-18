import {Flex } from "@mantine/core";
import Header from "../components/organisms/Header/Header";
import WelcomeContainer from "../components/organisms/WelcomeContainer/WelcomeContainer";
import ExamplesContainer from "../components/organisms/ExamplesContainer/ExamplesContainer";
import InfoContainer from "../components/organisms/InfoContainer/InfoContainer";
import UseCasesContainer from "../components/organisms/UseCasesContainer/UseCasesContainer";

const MainPage = () => {
  return (
    <Flex align="center" direction="column">
      <Header />
      <WelcomeContainer/>
      <ExamplesContainer/>
      <InfoContainer/>
      <UseCasesContainer/>
    </Flex>
  );
};

export default MainPage;
