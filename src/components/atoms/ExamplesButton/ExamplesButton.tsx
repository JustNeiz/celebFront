import { NavLink } from "@mantine/core";
import { IconMovie } from "@tabler/icons-react";

const ExamplesButton = () => {
  return (

    <NavLink label="Examples" leftSection={<IconMovie/>} w={150} className="hover" href="#examples"/>
  )
};

export default ExamplesButton;
