import React from "react";
import { Button } from "antd";

interface ButtonProps {
  onClick: () => void;
}

const CreateBookButton: React.FC<ButtonProps> = ({ onClick: handleClick }) => {
  return (
    <Button onClick={handleClick} type="primary">
      Agregar libro
    </Button>
  );
};

export default CreateBookButton;
