import {Flex } from "@mantine/core";
import CompanyName from "../../atoms/CompanyName/CompanyName";
import HeaderButtonsContainer from "../../molecules/HeaderButtonsContainer/HeaderButtonsContainer";

const Header = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
      pos="fixed"
      w="100vw"
      bg="#ffece4"
      style={{ zIndex: 10 }}
    >
      <CompanyName />
      <HeaderButtonsContainer />
    </Flex>
  );
};

export default Header;
