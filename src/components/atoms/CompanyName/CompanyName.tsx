import { Center, Text } from "@mantine/core";
import css from "./CompanyName.module.css"
const CompanyName = () => {
  return (
    <div className={css.CompanyName}>
      <Center ml={10}>
        <Text fw={700}>
          <p>
            MakeCelebOn
          </p>
        </Text>
      </Center>
    </div>
  );
};

export default CompanyName;