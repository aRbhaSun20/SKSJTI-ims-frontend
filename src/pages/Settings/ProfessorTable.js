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
import AddProfessor from "./Popups/AddProfessor";
import "./settings.css";

const TABLE_HEADERS = [
  "KgId",
  "Name",
  "Designation",
  "Appointment Type",
  "Email",
  "Phone No.",
  "Pan Id",
];

function ProfessorTable() {
  const [addProfessor, setAddProfessor] = useState(false);
  return (
    <Paper className="table-details" elevation={3}>
      <div className="table-header">
        <Typography variant="h5">Professor Details</Typography>
        <div>
          <IconButton>
            <Tooltip arrow title="Download in CSV">
              <Download />
            </Tooltip>
          </IconButton>
          <IconButton onClick={() => setAddProfessor(true)}>
            <Tooltip arrow title="Add new Professor">
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
        open={addProfessor}
        title="Add Professor"
        setOpen={setAddProfessor}
      >
        <AddProfessor setOpen={setAddProfessor} />
      </Popup>
    </Paper>
  );
}

export default ProfessorTable;

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
