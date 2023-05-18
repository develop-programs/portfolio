import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { ContactUs } from "./Contact";

function Contact() {
  return (
    <Box sx={{ flexGrow: 1, width: "100%", height: "93.3vh" }}>
      <Grid container className="h-full">
        <Grid item xs={12} sm={6}>
          <Box sx={{ flexGrow: 1, marginTop: 20, marginLeft: 10 }}>
            <Typography
              variant="body1"
              component="div"
              fontSize={35}
              fontWeight={600}
            >
              INFO
            </Typography>
            <Typography
              variant="body1"
              component="div"
              fontSize={20}
              fontWeight={450}
              marginTop={3}
            >
              Phone : 9294512259
            </Typography>
            <Typography
              variant="body1"
              component="div"
              fontSize={20}
              fontWeight={450}
            >
              Email: shreyanshawadhiya@gmail.com
            </Typography>
            <Typography
              variant="body1"
              component="div"
              fontSize={20}
              fontWeight={450}
            >
              LinkedIn:
            </Typography>
            <Typography
              variant="body1"
              component="div"
              fontSize={20}
              fontWeight={450}
            >
              GitHub:
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              flexGrow: 1,
              marginTop: 20,
              marginLeft: 10,
            }}
          ></Box>
          <ContactUs />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
