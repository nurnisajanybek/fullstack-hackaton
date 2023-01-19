import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import   { useAuth } from "../contexts/AuthContextProvider";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Copyright(props) {

    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  
}

const theme = createTheme();

export default function Login() {
    const navigate = useNavigate()
 
 const {forgotpassword} = useAuth()
  const [email, setEmail] = useState("");

  function handleSave() {
    if (!email.trim()) {
      alert("Заполните поля!");
      return;
    }

    let formData = new FormData();
    formData.append("email", email);

    forgotpassword(formData);
  }

  const { login, error, setError } = useAuth();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        {error ? <Alert severity="error">{error}</Alert> : null}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Forgot Password
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
            <Button  sx={{width: "400px"}} variant="contained" onClick={()=>{
                handleSave()
                navigate("/newlogin")
            }}>Отправить пароль на почту</Button>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
