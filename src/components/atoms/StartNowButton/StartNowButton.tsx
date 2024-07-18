import { Button } from "@mantine/core";
import React from "react";

interface StartNowButtonProps {
  buttonSize: string;
}
const StartNowButton: React.FC<StartNowButtonProps> = ({buttonSize}) => {
  
  return (
    <Button bg="#ffa07a" c="#1C2936" size={buttonSize}>Start Now</Button>
  );
};

export default StartNowButton;