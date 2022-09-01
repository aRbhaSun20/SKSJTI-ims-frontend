import { Add, Delete, Download, Edit } from "@mui/icons-material";
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
import AddBatch from "./Popups/AddBatch";
import "./settings.css";

const TABLE_HEADERS = ["Year", "Course Name", "Department Name"];

function BatchTable() {
  const [addBatch, setAddBatch] = useState(false);

  return (
    <Paper className="table-details" elevation={3}>
      <div className="table-header">
        <Typography variant="h5">Batch Details</Typography>
        <div>
          <IconButton>
            <Tooltip arrow title="Download in CSV">
              <Download />
            </Tooltip>
          </IconButton>
          <IconButton onClick={() => setAddBatch(true)}>
            <Tooltip arrow title="Add new Batch">
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
      </TableContainer>{" "}
      <Popup
        open={addBatch}
        title="Add Batch"
        setOpen={setAddBatch}
      >
        <AddBatch setOpen={setAddBatch} />
      </Popup>
    </Paper>
  );
}

export default BatchTable;

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
      </TableCell>
    </TableRow>
  );
};
