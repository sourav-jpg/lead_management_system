import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import "../../styles/Background/Background.css";
import logo from "../../../assets/telogo.png";
import InputComponent from "../../atoms/InputComponent";
import ButtonComponent from "../../atoms/ButtonComponent";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";


function Login() {
  const [loginData, setLoginData] = useState({
    adminUserID: "",
    adminPassword: "",
  });
  const [userIdVal, setUserIdVal] = useState("");
  const [passVal, setPassVal] = useState("");
  const [togglePass, setTogglePass] = useState(true);

  let LoginDetails = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
    let navigate = useNavigate();
  console.log("----------", loginData);

  const handleToggle = () => {
    setTogglePass(!togglePass);
  };

  let userIDValidate = () => {
    const idRegex = /^[a-zA-Z.user]/;
    if (loginData.adminUserID) {
      if (idRegex.test(loginData.adminUserID)) {
        setUserIdVal("");
        return true;
      } else {
        setUserIdVal("*please enter correct userID");
      }
    } else {
      setUserIdVal("*please enter the userID");
    }
  };

  const passwordValidation = () => {
    const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    if (loginData.adminPassword) {
      if (passRegex.test(loginData.adminPassword)) {
        setPassVal("");
        return true;
      } else {
        setPassVal("invalid password");
      }
    } else {
      setPassVal("*password required");
    }
  };

  let LoginDone = () => {
    if(userIDValidate() && passwordValidation()){
      navigate("/dashboard");
    }
  };

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
              type="text"
              value={loginData.adminUserID}
              variant="filled"
              name="adminUserID"
              placeholder="Enter your employeeID"
              label="EmployeeID"
              fullWidth
              size="small"
              color="dark"
              focused
              onChange={LoginDetails}
              sx={{
                fontColor: "black",

                backgroundColor: "white",
                borderRadius: "10px",
                "& label.Mui-focused": {
                  color: "black",
                  pl: 1,
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "black",
                  pl: 1,
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
              }}
            />
          </Grid>
          <Grid sx={{ ml: 5, mb: 1 }}>
            {userIdVal && <span className="text-danger fs-5">{userIdVal}</span>}
          </Grid>

          <Grid item xs={4} className="login-input-password">
            <Grid item xs={6} className="login-password">
              <InputComponent
                value={loginData.adminPassword}
                size="small"
                variant="filled"
                type={togglePass ? "password" : "text"}
                label="Password"
                name="adminPassword"
                placeholder="Enter your password"
                onChange={LoginDetails}
                sx={{
                  fontColor: "black",

                  backgroundColor: "white",
                  borderRadius: "10px",
                  "& label.Mui-focused": {
                    color: "black",
                    pl: 1,
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "black",
                    pl: 1,
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black",
                    },
                    "&:hover fieldset": {
                      borderColor: "black",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "black",
                    },
                  },
                }}
              />
            </Grid>
            <Grid className="login-icon">
              {togglePass ? (
                <VisibilityOffIcon onClick={handleToggle} />
              ) : (
                <VisibilityIcon onClick={handleToggle} />
              )}
            </Grid>
          </Grid>
          <Grid sx={{ ml: 5 }}>
            {passVal && <div className="text-danger fs-5">{passVal}</div>}
          </Grid>
          <Grid item xs={4} className="login-btn" sx={{ mt: 5 }}>
            <Grid>
              <ButtonComponent
                variant="outlined"
                label="login"
                onClick={LoginDone}
                sx={{
                  width: "100%",
                  color: "white",
                  p: 1,
                  backgroundColor: "#FAA81D",
                  borderRadius: "5px",
                  "&:hover": {
                    backgroundColor: "#FAA81D",
                  },
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
                  borderColor: "#909090",
                  p: 1,
                  "&:hover": {
                    backgroundColor: "#909090",
                  },
                }}
              />
            </Grid>
          </Grid>

          <Grid item xs={1} className="login-break" sx={{ mt: 23 }}>
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
