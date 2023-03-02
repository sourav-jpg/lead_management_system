import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import "../../styles/Background/Background.css";
import logo from "../../../assets/telogo.png";
import InputComponent from "../../atoms/InputComponent";
import ButtonComponent from "../../atoms/ButtonComponent";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Login() {
  const [employee, setEmployee] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Grid className="main">
      <Grid className="login-container">
        <Grid className="login-background">
          <Grid item xs={4} sx={{ mt: 50, pl: 3 }} className="login-welcome">
            <Typography
              sx={{
                WebkitTextStroke: "1px black",
                fontSize: "80px",
                color: "#FFFFFF",
                fontFamily: "Agrandir Variable, Medium Wide",
                alignItems: "flex-start",
              }}
            >
              Good things on your way!
            </Typography>
          </Grid>
        </Grid>

        <Grid className="login-form">
          <Grid item xs={2} className="login-logo" sx={{ mt: 4 }}>
            <img src={logo} alt="logo" />
          </Grid>

          <Grid xs={2} className="login">
            <Typography
              sx={{
                fontFamily: "Abril Fatface, Regular",
                fontSize: "37px",
                fontWeight: "bold",
              }}
            >
              Login
            </Typography>
          </Grid>

          <Grid item xs={4} className="login-input" sx={{ mt: 3 }}>
            <InputComponent
              variant="outlined"
              placeholder="Enter"
              label="Employee ID"
              fullWidth
              size="small"
              sx={{ fontColor: "black", mb: 3 }}
            />
          </Grid>

          <Grid item xs={4} className="login-input-password">
            <Grid item xs={6} className="login-password">
              <InputComponent
                variant="outlined"
                label="Password"
                size="small"
                sx={{ fontColor: "black", mb: 3 }}
              />
            </Grid>
            <Grid className="login-icon">
              <VisibilityIcon />
            </Grid>
          </Grid>

          <Grid item xs={4} className="login-btn">
            <Grid>
              <ButtonComponent
                variant="outlined"
                label="login"
                sx={{
                  width: "100%",
                  color: "white",
                  backgroundColor: "#FAA81D",
                  borderRadius: "5px",
                }}
              />
            </Grid>
            <Grid>
              <ButtonComponent
                label="cancel"
                variant="outlined"
                sx={{
                  width: "100%",
                  backgroundColor: "#909090",
                  color: "white",
                  borderRadius: "5px",
                  borderColor: "#FAA81D",
                }}
              />
            </Grid>
          </Grid>

          <Grid item xs={1} className="login-break" sx={{ mt: 25 }}>
            <hr />
          </Grid>

          <Grid item xs={3} className="login-footer" sx={{ mt: 1 }}>
            <Grid>
              <span>Copyright © 2018 Aleercio.com</span>
            </Grid>
            <Grid>
              <span>Terms & Conditions | Privacy policy</span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Login;
