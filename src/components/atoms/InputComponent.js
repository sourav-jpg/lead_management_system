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
  size="small",
  name,
  value,
  type
}) => {
  return (
    <div>
      <TextField
        type={type}
        variant={variant}
        placeholder={placeholder}
        name ={name}
        value ={value}
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
