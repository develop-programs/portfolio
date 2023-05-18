import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import Education from "./education";
import Chart from "./Skills";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function Resume() {
  return (
    <div>
      <Box sx={{ width: "100%", textAlign: "end" }}>
        <Typography variant="body1" component="div" marginRight={4}>
          <Button variant="text" color="inherit">
            <span className="font-semibold">
              <FileDownloadIcon /> Download
            </span>
          </Button>
        </Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          height: "89vh",
          paddingX: { xs: "none", sm: "2rem", md: "10rem" },
          paddingY: "2rem",
        }}
      >
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Education
          </AccordionSummary>
          <AccordionDetails>
            <Education />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Experience
          </AccordionSummary>
          <AccordionDetails>Data2</AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Skills
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                width: "100%",
                height: "20rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Chart />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}

export default Resume;
