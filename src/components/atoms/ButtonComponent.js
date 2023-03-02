import React from "react";
import { Button } from "@mui/material";

const ButtonComponent = ({
  label = "",
  disabled = false,
  size = "small",
  variant = "",
  sx = {},
  fullWidth = false,
  // border = "",
  // bgcolor = "",
  onClick = () => {},
}) => {
  return (
    <div>
      <Button
        variant={variant}
        disabled={disabled}
        size={size}
        sx={sx}
        label={label}
        fullWidth={fullWidth}
        onClick={onClick}
      >
        {label}
      </Button>
    </div>
  );
};

export default ButtonComponent;
