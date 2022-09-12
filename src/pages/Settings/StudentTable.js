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
import React, { useState } from "react";
import Popup from "../../components/shared/Popup";
import AddStudent from "./Popups/AddStudent";
import "./settings.css";

const TABLE_HEADERS = [
  "USN",
  "Name",
  "Age",
  "Email",
  "Phone No.",
  "Department",
  "Course Name",
];

function StudentTable() {
  const [addStudent, setAddStudent] = useState(false);
  return (
    <Paper className="table-details" elevation={3}>
      <div className="table-header">
        <Typography variant="h5">Student Details</Typography>
        <div>
          <IconButton>
            <Tooltip arrow title="Download in CSV">
              <Download />
            </Tooltip>
          </IconButton>
          <IconButton onClick={() => setAddStudent(true)}>
            <Tooltip arrow title="Add new Student">
              <Add />
            </Tooltip>
          </IconButton>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="table-row">
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
      <Popup
        open={addStudent}
        title="Add Student"
        setOpen={setAddStudent}
      >
        <AddStudent setOpen={setAddStudent} />
      </Popup>
    </Paper>
  );
}

export default StudentTable;

const IndiRows = ({ data = {} }) => {
  return (
    <TableRow className="table-row">
      <TableCell align="center">{data?.kgId}</TableCell>
      <TableCell align="center">{data?.name}</TableCell>
      <TableCell align="center">{data?.designation}</TableCell>
      <TableCell align="center">{data?.appointType}</TableCell>
      <TableCell align="center">{data?.email}</TableCell>
      <TableCell align="center">{data?.phone}</TableCell>
      <TableCell align="center">{data?.pan}</TableCell>
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
