import { useState } from "react";

type UseToggleProps = [boolean, () => void];

export default (): UseToggleProps => {
  const [isOpen, setToggle] = useState(false);

  const toggleOpen = () => {
    setToggle(!isOpen);
  };

  return [isOpen, toggleOpen];
};
