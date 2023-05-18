import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <Box sx={{ flexGrow: 1, width: "100%", height: "93vh" }}>
      <Grid container className="h-full" padding={4}>
        <Grid item xs={12} sm={6} className=""></Grid>
        <Grid
          item
          xs={12}
          sm={6}
          className="flex items-center min-[320px]:text-center min-[768px]:text-left"
        >
          <Box>
            <Typography variant="body1" color="inherit" fontSize={40} fontWeight="bold">
              I am a
              <Typewriter
                options={{
                  strings: ["Web Developer", "Web Designer","Full Stack Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              sx={{ marginRight: { xs: 0, sm: 40 } }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Typography>
            <button className="bg-indigo-600 border-2 px-4 font-semibold mt-2 py-2 rounded-md text-white border-indigo-600 hover:bg-white hover:text-indigo-600 ">
              <NavLink to="/resume">Resume</NavLink>
            </button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
