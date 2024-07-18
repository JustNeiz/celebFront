import { NavLink } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";

const HomeButton = () => {
  return (
    <NavLink label="Home" leftSection={<IconHome stroke={2} />} w={150} className="hover" href="#home"/>
  );
};

export default HomeButton;
