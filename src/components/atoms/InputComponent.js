import React from "react";
import { TextField } from "@mui/material";

const InputComponent = ({
  placeholder = "",
  label = "label",
  variant = "",
  onChange = () => {},
  id = "",
  sx = {},
  fullWidth = false,
  size="small"
}) => {
  return (
    <div>
      <TextField
        variant={variant}
        placeholder={placeholder}
        label={label}
        id={id}
        onChange={onChange}
        sx={sx}
        fullWidth={fullWidth}
        size={size}
      />
    </div>
  );
};

export default InputComponent;
