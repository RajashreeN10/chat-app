import {
  Box,
  Button,
  Paper,
  Tab,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";

import {
  TabContext,
  TabPanel,
  TabList,
} from "@mui/lab";

import { useAuth } from "./handler/authhandler";
import chatImage from "../../assets/chatImage.png";

const Auth = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleLogin,
    handleSignup,
  } = useAuth();

  // Controls which tab is active
  const [value, setValue] = useState("1");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        width:"100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
         boxSizing: "border-box",
             px: 2,
      }}
    >
         {/* IMAGE - DESKTOP ONLY */}
        <Box
          sx={{
            display: {
              xs: "none",   // mobile -> hidden
              md: "block",  // tablet/laptop -> visible
            },
             width: {
        md: "45%",
        lg: "45%",
      },
           
            maxWidth: 500,
          }}
        >
          <Box
            component="img"
  src={chatImage}
  alt="Chat application"
  sx={{
    width: "100%",
    maxHeight: "90vh",       // ← limits image height
    objectFit: "contain",    // ← keeps entire image visible
    display: "block",
  }}
          />
        </Box>
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 500,
          p: 4,
          mr:"4px"
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">
            Welcome ✌️
          </Typography>

          <Typography>
            Fill the details to get started with the best chat app!
          </Typography>
        </Box>

        {/* Tabs */}
        <Box>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <TabList
                onChange={handleTabChange}
                variant="fullWidth"
                sx={{
                  "& .MuiTab-root": {
                    fontWeight: 600,
                  },

                  "& .Mui-selected": {
                    color: "#7C3AED",
                  },

                  "& .MuiTabs-indicator": {
                    backgroundColor: "#7C3AED",
                  },
                }}
              >
                <Tab label="Login" value="1" />
                <Tab label="Signup" value="2" />
              </TabList>
            </Box>

            {/* LOGIN */}
            <TabPanel value="1" keepMounted>
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                variant="contained"
                fullWidth
                onClick={handleLogin}
                sx={{ mt: 1 }}
              >
                Login
              </Button>
            </TabPanel>

            {/* SIGNUP */}
            <TabPanel value="2" keepMounted>
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                margin="normal"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
              />

              <Button
                variant="contained"
                fullWidth
                onClick={handleSignup}
                sx={{ mt: 1 }}
              >
                Sign Up
              </Button>
            </TabPanel>
          </TabContext>
        </Box>
      </Paper>
    </Box>
  
  );
};

export default Auth;