import {
  Add,
  Delete,
  Download,
  Edit,
  KeyboardArrowRight,
} from "@mui/icons-material";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import "./settings.css";

const TABLE_HEADERS = ["Name", "Hod", "Course Name"];

function DepartmentTable() {
  return (
    <Paper className="table-details" elevation={3}>
      <div className="table-header">
        <Typography variant="h5">Department Details</Typography>
        <div>
          <IconButton>
            <Tooltip arrow title="Download in CSV">
              <Download />
            </Tooltip>
          </IconButton>
          <IconButton>
            <Tooltip arrow title="Add new Department">
              <Add />
            </Tooltip>
          </IconButton>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="table-row dept">
              {TABLE_HEADERS.map((ele, i) => (
                <TableCell align="center" key={i}>
                  <Typography variant="subtitle1">
                    <b>{ele} </b>
                  </Typography>
                </TableCell>
              ))}
              <TableCell align="center">
                <Typography variant="subtitle1">
                  <b>Actions </b>
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <IndiRows />
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default DepartmentTable;

const IndiRows = ({ data = {} }) => {
  return (
    <TableRow className="table-row dept">
      <TableCell align="center">{data?.name}</TableCell>
      <TableCell align="center">{data?.HOD}</TableCell>
      <TableCell align="center">{data?.courseName}</TableCell>
      <TableCell align="center" className="Actions">
        <IconButton>
          <Edit />
        </IconButton>
        <IconButton>
          <Delete />
        </IconButton>
        <IconButton>
          <KeyboardArrowRight />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
