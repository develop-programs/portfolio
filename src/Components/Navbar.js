import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [Theme, setTheme] = React.useState("light");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="inherit" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Typography
            variant="body1"
            color="inherit"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "none" } }}
          >
            <IconButton aria-label="button" edge="start">
              <MenuIcon />
            </IconButton>
          </Typography>
          <Typography
            variant="body1"
            color="inherit"
            sx={{
              flexGrow: 1,
              textAlign: "end",
              display: { xs: "none", sm: "block" },
            }}
          >
            <button className="mr-2 px-3 py-2 rounded-md bg-white font-semibold hover:bg-indigo-500 hover:text-white">
              <NavLink to="/resume">Resume</NavLink>
            </button>
            <button className="mr-2 px-3 py-2 rounded-md bg-white font-semibold hover:bg-indigo-500 hover:text-white">
              <NavLink to="/project">Projects</NavLink>
            </button>
            <button className="mr-2 px-3 py-2 rounded-md bg-white font-semibold hover:bg-indigo-500 hover:text-white">
              <NavLink to="/Contact">Contact</NavLink>
            </button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
