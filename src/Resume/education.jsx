import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const Data = [
  {
    DegreeName: "Degree",
    EducationType: "school/college/University",
    Date: "Passing Year",
    Type: "Board/University",
    Percent: "Percentage",
  },
];

const Info = [
  {
    DegreeName: "12",
    EducationType: "Bharat Mata Hr. Sec. School",
    Date: "2019",
    Type: "Board",
    Percent: "52%",
  },
  {
    DegreeName: "B.C.A",
    EducationType: "Ravi Sankar Sukla University",
    Date: "2022",
    Type: "University",
    Percent: "80%",
  },
];

function Education() {
  return (
    <Box sx={{ flexGrow: 1, widht: { xs: "20%", sm: "100%" } }}>
      <Table>
        <TableHead>
          {Data.map((data, idk) => (
            <TableRow key={idk}>
              <TableCell>{data.DegreeName}</TableCell>
              <TableCell>{data.EducationType}</TableCell>
              <TableCell>{data.Date}</TableCell>
              <TableCell>{data.Type}</TableCell>
              <TableCell>{data.Percent}</TableCell>
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {Info.map((data) => (
            <TableRow>
              <TableCell>{data.DegreeName}</TableCell>
              <TableCell>{data.EducationType}</TableCell>
              <TableCell>{data.Date}</TableCell>
              <TableCell>{data.Type}</TableCell>
              <TableCell>{data.Percent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default Education;
