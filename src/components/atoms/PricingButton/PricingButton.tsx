import { NavLink } from "@mantine/core";
import { IconCoins } from "@tabler/icons-react";

const PricingButton = () => {
  return (
    <NavLink href="#pupa" label="Pricing" leftSection={<IconCoins /> } w={150} className="hover"/>
  );
};

export default PricingButton;